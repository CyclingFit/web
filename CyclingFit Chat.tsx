import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../actions/chatActions';

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.chat.messages);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    dispatch(sendMessage(input));
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Chat</h1>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Enviar
      </button>
    </div>
  );
};

export default Chat;

