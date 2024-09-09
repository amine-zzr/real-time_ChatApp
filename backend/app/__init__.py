from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_socketio import SocketIO
from flask_login import LoginManager
from flask_cors import CORS
from config import Config

db = SQLAlchemy()
socketio = SocketIO(cors_allowed_origins="*")
login_manager = LoginManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # initialize extensions
    db.init_app(app)
    socketio.init_app(app)
    login_manager.init_app(app)
    CORS(app)

    # inporting blueprints and routes
    from app.routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    # initialize websockets
    from app.websockets import initialize_websockets
    initialize_websockets(socketio)

    return app
