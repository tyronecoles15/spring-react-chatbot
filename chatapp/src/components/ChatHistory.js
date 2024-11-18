import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import '../styles/ChatHistory.css';

const ChatHistory = ({ onSelectChat }) => {
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        const fetchChats = async () => {
            const querySnapshot = await getDocs(collection(db, "chats"));
            const chats = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setChatList(chats);
        };

        fetchChats();
    }, []);

    return (
        <div id="chat-history">
            <h2>Chat History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Chats</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {chatList.map((chat) => (
                        <tr key={chat.id} onClick={() => onSelectChat(chat)}>
                            <td>{chat.input}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ChatHistory;
