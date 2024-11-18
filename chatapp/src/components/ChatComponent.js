import React, { useState } from 'react';
import '../styles/ChatComponent.css';
import SendComponent from './SendComponent';
import logo from '../images/openai-logo.png';
import ChatHistory from "./ChatHistory";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [loading, setLoading] = useState(false); 

    const handleSubmit = async (message) => {
        setLoading(true); 
        try {
            const res = await fetch(`http://localhost:8080/chat/${encodeURIComponent(message)}`);
            const text = await res.text();

            const chatEntry = {
                input: message,
                response: text,
                timestamp: new Date().toISOString(),
            };

            await addDoc(collection(db, "chats"), chatEntry);

            setMessages((prevMessages) => [...prevMessages, chatEntry]);
        } catch (error) {
            console.error("Error saving chat:", error);
        } finally {
            setLoading(false); 
        }
    };

    const handleChatSelection = (chat) => {
        setMessages([{ input: chat.input, response: chat.response }]);
    };

    return (
        <div id='chat-component'>
            <img src={logo} alt="Logo" id='logo' />
            <h1 id='main-heading'>How can I help you today?</h1>
            <div id="chatbot-container">
                <div id="chat-div">
                    {messages.map((msg, index) => (
                        <div key={index} className="message-pair">
                            <div className="input">
                                <p>{msg.input}</p>
                            </div>
                            <div className="message">
                                <p>{msg.response}</p>
                            </div>
                        </div>
                    ))}
                    
                    {loading && (
                        <div className="loading-animation">
                            <p>Loading...</p>
                            <div className="spinner"></div>
                        </div>
                    )}
                </div>
                <ChatHistory onSelectChat={handleChatSelection} />
                {selectedChat ? (
                    <div>
                        <h3>Selected Chat</h3>
                        <p>Input: {selectedChat.input}</p>
                        <p>Response: {selectedChat.response}</p>
                    </div>
                ) : (
                    <SendComponent onSubmit={handleSubmit} />
                )}
            </div>
        </div>
    );
};

export default ChatComponent;
