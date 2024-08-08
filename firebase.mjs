import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC1dNeK_XB-5FJF4b-1BKg8mmZZ5-FSIIk",
    authDomain: "login-signup-2c541.firebaseapp.com",
    projectId: "login-signup-2c541",
    storageBucket: "login-signup-2c541.appspot.com",
    messagingSenderId: "891322082364",
    appId: "1:891322082364:web:d2c31dcf747933011ccf39",
    measurementId: "G-8VXZ8ZP78L"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


