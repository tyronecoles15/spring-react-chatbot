import React, { useState } from 'react';
import send from '../images/send-button-white.png';
import '../styles/SendComponent.css';

function SendComponent({ onSubmit }) {
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSubmit(message);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSend}>
            <div id="inputButtonContainer">
                <input
                    type="text"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Enter your message"
                />
                <button type="submit">
                    <img src={send} alt="Send Message" id="send-button" />
                </button>
            </div>
        </form>
    );
}

export default SendComponent;
