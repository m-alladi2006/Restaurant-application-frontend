// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1rS6sp1uXCyq0RKpjWoUpevpjXx9k4HQ",
  authDomain: "spice-haven-44ad8.firebaseapp.com",
  projectId: "spice-haven-44ad8",
  storageBucket: "spice-haven-44ad8.firebasestorage.app",
  messagingSenderId: "256404312876",
  appId: "1:256404312876:web:f4eb38b8ed73f3942ed289",
  measurementId: "G-420J0BT7GB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();