from flask_socketio import emit, join_room, leave_room
from app.models import ChatMessage, db

def initialize_websockets(socketio):
    """
    Function to initialize and configure WebSocket event handlers for the application.

    Args:
        socketio: The SocketIO instance to bind the events to.
    """

    @socketio.on('join')
    def handle_join(data):
        """
        Handle a user joining a chat room. Emits a message to the room notifying 
        other users that a new user has joined.

        Args:
            data (dict): Contains 'username' of the user and 'room' to join.
        """
        room = data.get('room')
        join_room(room)
        emit('user_joined', {'message': f"{data.get('username')} has joined {room}"}, room=room)

    @socketio.on('leave')
    def handle_leave(data):
        """
        Handle a user leaving a chat room. Emits a message to the room notifying 
        other users that the user has left.

        Args:
            data (dict): Contains 'username' of the user and 'room' to leave.
        """
        room = data.get('room')
        leave_room(room)
        emit('user_left', {'message': f"{data.get('username')} has left {room}"}, room=room)

    @socketio.on('send_message')
    def handle_send_message(data):
        """
        Handle a user sending a message to a chat room. The message is stored in the database
        and emitted to all users in the room.

        Args:
            data (dict): Contains 'message', 'room', 'user_id', and 'username'.
        """
        room = data.get('room')
        message = data.get('message')
        user_id = data.get('user_id')

        # Save message to the database
        chat_message = ChatMessage(content=message, room=room, user_id=user_id)
        db.session.add(chat_message)
        db.session.commit()

        # Emit the message to the room
        emit('receive_message', {'message': message, 'username': data.get('username')}, room=room)
