import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { user: 'rakati', text: 'Hello, world!' },
    { user: 'rakati', text: 'Hi There!' },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    // handle sending message here
    setMessages = true;
  };

  return (
    <div className='chat-container'>
      <h2>Chat Room</h2>
      <ul className='messages'>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.user}</strong>: {msg.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSendMessage}>
        <input type="text" name="msg" placeholder="Type a message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
