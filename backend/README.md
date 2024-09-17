# Real-time ChatApp Backend

This is the backend for a real-time chat application built using Flask, Flask-SocketIO, and SQLite. It supports user authentication, messaging in real-time using WebSockets, and stores messages in a database.

## Features

- Real-time messaging with WebSocket using Flask-SocketIO.
- User authentication with Flask-Login.
- SQLite for storing user and chat data.
- RESTful API endpoints for user and message management.

## Requirements

Make sure you have the following installed:

- Python 3.8+
- SQLite (included with Python)
  
### Python Packages

Install the required dependencies using `pip`:

```bash
pip install -r requirements.txt

### Running the Application

Clone the repository and navigate into the backend directory.

Set the FLASK_ENV environment variable to development:

```bash
export FLASK_ENV=development

Set up the database and perform migrations:

```bash
flask db init
flask db migrate
flask db upgrade

Run the application:

```bash
python3 run.py

By default, the backend will be served at http://127.0.0.1:5000/.
