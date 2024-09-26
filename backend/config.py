import os

class Config:
    """
    Configuration class for setting up application-wide settings such as 
    secret keys, database URIs, and SQLAlchemy options.
    """
    
    # Secret key for session management and security, set via environment variable or default value
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'oursecretkey'
    
    # Database URI for SQLAlchemy, fetched from environment or defaults to SQLite
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///chatapp.db'
    
    # Disable modification tracking to save system resources
    SQLALCHEMY_TRACK_MODIFICATIONS = False
