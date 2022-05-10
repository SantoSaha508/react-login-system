// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOZG7n4OuyovIIyUXnLn0v7WQyyU18nMQ",
  authDomain: "react-auth-login-da883.firebaseapp.com",
  projectId: "react-auth-login-da883",
  storageBucket: "react-auth-login-da883.appspot.com",
  messagingSenderId: "1070989458109",
  appId: "1:1070989458109:web:eb0cc7ea3da8a4adecd5d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;