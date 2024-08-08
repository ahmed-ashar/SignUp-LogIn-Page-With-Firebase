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
            Swal.fire({
                title: 'Sign Up Successful!',
                text: 'You have successfully created your account.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.href = 'Dashboard.html';
            });
        })
        .catch((error) => {
            console.error('Error in sign up:', error.message);e
            Swal.fire({
                title: 'Sign Up Failed!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        });
});


signIn.addEventListener('click', function () {
    signInWithEmailAndPassword(auth, emailSignIn.value, passwordSignIn.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Logged in:', user);
            Swal.fire({
                title: 'Login Successful!',
                text: 'You have successfully logged in.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {

                window.location.href = 'Dashboard.html';
            });
        })
        .catch((error) => {
            console.error('Error in sign in:', error.message);
            Swal.fire({
                title: 'Login Failed!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        });
});

	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});

	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});
