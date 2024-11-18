// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8VW91RN4DlULZFZHQG6z2E4Sk6J5hvQE",
  authDomain: "spring-react-chatbot.firebaseapp.com",
  projectId: "spring-react-chatbot",
  storageBucket: "spring-react-chatbot.firebasestorage.app",
  messagingSenderId: "760147420752",
  appId: "1:760147420752:web:14b9523d0fcd9097f09355"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };