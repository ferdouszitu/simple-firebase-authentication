// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4yVNKeUmxY-5TUqjcMK3DvC7DP3wjG-Y",
    authDomain: "simple-firebase-authenti-78d8a.firebaseapp.com",
    projectId: "simple-firebase-authenti-78d8a",
    storageBucket: "simple-firebase-authenti-78d8a.appspot.com",
    messagingSenderId: "591332417856",
    appId: "1:591332417856:web:1b1e0f3beb2c21e91d1aa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;