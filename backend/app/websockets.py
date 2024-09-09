from flask_socketio import emit, join_room, leave_room
from app.models import ChatMessage, db

def initialize_websockets(socketio):

    @socketio.on('join')
    def handle_join(data):
        room = data.get('room')
        join_room(room)
        emit('user_joined', {'message': f"{data.get('username')} has joined {room}"}, room=room)

    @socketio.on('leave')
    def handle_leave(data):
        room = data.get('room')
        leave_room(room)
        emit('user_left', {'message': f"{data.get('username')} has left {room}"}, room=room)

    @socketio.on('send_message')
    def handle_send_message(data):
        room = data.get('room')
        message = data.get('message')
        user_id = data.get('user_id')

        chat_message = ChatMessage(content=message, room=room, user_id=user_id)
        db.session.add(chat_message)
        db.session.commit()

        emit('receive_message', {'message': message, 'username': data.get('username')}, room=room)
