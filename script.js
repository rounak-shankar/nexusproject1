const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Form Validation
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const error = document.getElementById('signupError');

    if (name === '' || email === '' || password === '') {
        error.textContent = 'All fields are required';
    } else if (!validateEmail(email)) {
        error.textContent = 'Invalid email format';
    } else {
        error.textContent = '';
        alert('Signup successful!');
        // You can add code here to handle the signup data
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const error = document.getElementById('loginError');

    if (email === '' || password === '') {
        error.textContent = 'All fields are required';
    } else if (!validateEmail(email)) {
        error.textContent = 'Invalid email format';
    } else {
        error.textContent = '';
        alert('Login successful!');
        // You can add code here to handle the login data
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
