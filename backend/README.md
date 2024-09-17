# Real-time ChatApp Backend

This is the backend for a real-time chat application built using Flask, Flask-SocketIO, and SQLite. It supports user authentication, messaging in real-time using WebSockets, and stores messages in a database. The backend also integrates Redis for managing SocketIO events and message broadcasting.

## Features

- Real-time messaging with WebSocket using Flask-SocketIO.
- User authentication with Flask-Login.
- SQLite for storing user and chat data.
- Redis integration for message broadcasting and room management.
- RESTful API endpoints for user and message management.

## Requirements

Make sure you have the following installed:

- Python 3.8+
- SQLite (included with Python)
- Redis (for SocketIO message handling)
  
### Running the Application

1. Clone the repository and navigate into the backend directory.

2. Install the necessary dependencies:

`pip install -r requirements.txt`

3. Set the `FLASK_ENV` environment variable to `development`:

`export FLASK_ENV=development`

4. Set up the database and perform migrations:

`flask db init`
`flask db migrate`
`flask db upgrade`

5. Run the application:

`python3 run.py`

By default, the backend will be served at `http://127.0.0.1:5000/`

## Docker Setup

### Building the Docker Image

To build the Docker image for the backend, navigate to the `backend/` directory where the `Dockerfile` is located and run the following command:

`docker build -t chatapp-backend .`

### Running the Docker Container

Once the image is built, you can run a container from the image with the following command:

`docker run -p 5000:5000 chatapp-backend`

This will start the Flask application inside the Docker container, mapping port 5000 of the container to port 5000 on your host machine.
