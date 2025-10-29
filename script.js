const signUpButton = document.getElementById('signUpbtn');
const signInButton = document.getElementById('signInbtn');
const container = document.getElementById('container');
const signUp = document.getElementById('signUp');
const signIn = document.getElementById('signIn');
const emailSignUp = document.getElementById('emailSignUp');
const passwordSignUp = document.getElementById('passwordSignUp');
const emailSignIn = document.getElementById('emailSignIn');
const passwordSignIn = document.getElementById('passwordSignIn');

// ======== SIGN UP FUNCTION =========
signUp.addEventListener('click', function () {
    const email = emailSignUp.value.trim();
    const password = passwordSignUp.value.trim();

    if (!email || !password) {
        Swal.fire({
            title: 'Error!',
            text: 'Please fill in both fields.',
            icon: 'warning'
        });
        return;
    }

    // Get existing users from LocalStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        Swal.fire({
            title: 'Sign Up Failed!',
            text: 'This email is already registered.',
            icon: 'error'
        });
        return;
    }

    // Create new user object
    const newUser = { email, password };

    // Save to LocalStorage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    Swal.fire({
        title: 'Sign Up Successful!',
        text: 'You have successfully created your account.',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        window.location.href = 'Dashboard.html';
    });
});

// ======== SIGN IN FUNCTION =========
signIn.addEventListener('click', function () {
    const email = emailSignIn.value.trim();
    const password = passwordSignIn.value.trim();

    if (!email || !password) {
        Swal.fire({
            title: 'Error!',
            text: 'Please fill in both fields.',
            icon: 'warning'
        });
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Match user credentials
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        Swal.fire({
            title: 'Login Successful!',
            text: 'You have successfully logged in.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            // Save current user (optional)
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = 'Dashboard.html';
        });
    } else {
        Swal.fire({
            title: 'Login Failed!',
            text: 'Invalid email or password.',
            icon: 'error'
        });
    }
});

// ======== UI PANEL TOGGLE =========
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
