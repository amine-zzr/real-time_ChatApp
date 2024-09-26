from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_socketio import SocketIO
from flask_login import LoginManager
from flask_cors import CORS
from config import Config

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()
socketio = SocketIO(cors_allowed_origins="*")
login_manager = LoginManager()

def create_app():
    """
    Factory function to create a Flask app instance.
    Configures the app with settings from Config, initializes extensions,
    registers blueprints, and initializes websockets.
    
    Returns:
        app: The configured Flask app instance.
    """
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions with the app
    db.init_app(app)
    socketio.init_app(app)
    login_manager.init_app(app)
    migrate.init_app(app, db)
    CORS(app)

    # Import and register blueprints
    from app.routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    # Initialize WebSockets
    from app.websockets import initialize_websockets
    initialize_websockets(socketio)

    return app
