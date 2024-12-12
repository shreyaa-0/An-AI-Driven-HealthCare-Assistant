import axios from 'axios';
import React, { useState } from 'react';
import './Chatbot.css';

const GPTChatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (input.trim() === '') return;

        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');
        setLoading(true);

        try {
            const response = await axios.post(
                'https://api.gemini.ai/v1/chat/completions',  // Replace with the Gemini API endpoint
                {
                    model: 'gemini-1',  // Replace with the correct Gemini model ID if needed
                    messages: [
                        ...messages.map(msg => ({
                            role: msg.sender === 'user' ? 'user' : 'assistant',
                            content: msg.text
                        })),
                        { role: 'user', content: input }
                    ]
                },
                {
                    headers: {
                        'Authorization': `Bearer AIzaSyDFRpPooMV7zovF-73LyhnBzKaEPiwAaSg`,  // Use your Gemini API key here
                        'Content-Type': 'application/json',
                    }
                }
            );

            const botMessage = response.data.choices[0].message.content;
            setMessages([
                ...messages,
                { text: input, sender: 'user' },
                { text: botMessage, sender: 'bot' }
            ]);
        } catch (error) {
            // Handle errors from Gemini API
            console.error('Error:', error.response ? error.response.data : error.message);
            setMessages([
                ...messages,
                { text: input, sender: 'user' },
                { text: 'Something went wrong. Please try again.', sender: 'bot' }
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="chatbot">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
                {loading && <div className="message bot">...</div>}
            </div>
            <div className="input">
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

export default GPTChatbot;
