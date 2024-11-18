import React, { useState } from 'react';
import './styles/App.css';
import ChatComponent from './components/ChatComponent';
import LoginComponent from './components/LoginComponent';
import SignUpComponent from './components/SignUpComponent';
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
    const [user, setUser] = useState(null);
    const [showSignUp, setShowSignUp] = useState(false);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const handleLogout = async () => {
        await signOut(auth);
        setUser(null);
    };

    return (
        <div className="App">
            {!user ? (
                showSignUp ? (
                    <SignUpComponent onSignUpSuccess={() => setShowSignUp(false)} />
                ) : (
                    <LoginComponent onLoginSuccess={() => setUser(auth.currentUser)} />
                )
            ) : (
                <>
                    
                    <ChatComponent />
                </>
            )}
            {!user && (
                <button onClick={() => setShowSignUp(!showSignUp)} className="toggle-auth">
                    {showSignUp ? "Back to Login" : "Sign Up"}
                </button>
            )}
        </div>
    );
}

export default App;
