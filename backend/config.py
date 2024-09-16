import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'oursecretkey'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///chatapp.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
