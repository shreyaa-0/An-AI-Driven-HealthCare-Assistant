// src/StyledChatbot.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './StyledChatbot.css'; // Add fancy styles here

const StyledChatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (!input.trim()) return;

        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');

        // Simulate bot response for demo
        setTimeout(() => {
            setMessages([...messages, { text: input, sender: 'user' }, { text: 'This is a bot reply.', sender: 'bot' }]);
        }, 1000);
    };

    return (
        <div className="styled-chatbot">
            <div className="chat-container">
                {messages.map((msg, index) => (
                    <div key={index} className={`message-bubble ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default StyledChatbot;
