import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from "../firebase";
import '../styles/LoginComponent.css'

const LoginComponent = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            onLoginSuccess();
        } catch (err) {
            setError("Login failed. Please check your credentials.");
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            onLoginSuccess(result.user); 
        } catch (err) {
            setError("Google Sign-In failed. Please try again.");
            console.error(err);
        }
    };

    return (
        <div className="login-container">
            
            <form id='sign-in-form' onSubmit={handleLogin}>
               
            <button id='google' onClick={handleGoogleSignIn}>Sign in with Google</button>
            
            </form>
            
        </div>
    );
};

export default LoginComponent;
