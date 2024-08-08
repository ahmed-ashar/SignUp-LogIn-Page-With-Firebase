import { auth } from "./firebase.mjs";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const signUpButton = document.getElementById('signUpbtn');
const signInButton = document.getElementById('signInbtn');
const container = document.getElementById('container');
const signUp = document.getElementById('signUp');
const signIn = document.getElementById('signIn');
const emailSignUp = document.getElementById('emailSignUp');
const passwordSignUp = document.getElementById('passwordSignUp');
const emailSignIn = document.getElementById('emailSignIn');
const passwordSignIn = document.getElementById('passwordSignIn');


signUp.addEventListener('click', function () {
    createUserWithEmailAndPassword(auth, emailSignUp.value, passwordSignUp.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Signed up:', user);
            window.location.href = 'Dashboard.html';
        })
        .catch((error) => {
            console.error('Error in sign up:', error.message);
        });
});


signIn.addEventListener('click', function () {
    signInWithEmailAndPassword(auth, emailSignIn.value, passwordSignIn.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Logged in:', user);
            window.location.href = 'Dashboard.html';
        })
        .catch((error) => {
            console.error('Error in sign in:', error.message);
        });
});

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
