from flask import Blueprint, request, jsonify
from flask_login import login_user, logout_user, login_required
from werkzeug.security import generate_password_hash, check_password_hash
from app import db
from app.models import User

main = Blueprint('main', __name__)

@main.route('/api/register', methods=['POST'])
def register():
    """
    API endpoint to register a new user.
    Expects 'username', 'email', and 'password' in the request body (JSON format).
    Returns a success message upon successful registration, or an error message if the user already exists.
    """
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if User.query.filter_by(email=email).first() or User.query.filter_by(username=username).first():
        return jsonify({'status': 'error', 'message': 'User already exists'}), 400

    hashed_password = generate_password_hash(password)
    new_user = User(username=username, email=email, password_hash=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'status': 'success', 'message': 'User registered successfully'}), 201

@main.route('/api/login', methods=['POST'])
def login():
    """
    API endpoint to log in a user.
    Expects 'username' and 'password' in the request body (JSON format).
    Returns a success message upon successful login, or an error message if credentials are invalid.
    """
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    user = User.query.filter_by(username=username).first()

    if user and check_password_hash(user.password_hash, password):
        login_user(user)
        return jsonify({'status': 'success', 'message': 'Login successful', 'user_id': user.id}), 200
    else:
        return jsonify({'status': 'error', 'message': 'Invalid credentials'}), 401

@main.route('/api/logout', methods=['POST'])
@login_required
def logout():
    """
    API endpoint to log out the current user.
    Requires the user to be logged in.
    Returns a success message upon logout.
    """
    logout_user()
    return jsonify({'status': 'success', 'message': 'Logged out successfully'}), 200
