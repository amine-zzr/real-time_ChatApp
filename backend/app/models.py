from datetime import datetime
from flask_login import UserMixin
from app import db, login_manager

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    chat_messages = db.relationship('ChatMessage', backref='author', lazy=True)

    def __repr__(self):
        return f'<User {self.username}>'

class ChatMessage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(500), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    room = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return f'<Message {self.content}>'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))
