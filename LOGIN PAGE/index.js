document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the user has logged in before
    const loggedInBefore = localStorage.getItem('loggedIn');

    if (loggedInBefore) {
        document.getElementById('message').innerText = 'You are already logged in!';
    } else {
        if (username && email && password) {
            // Store user login status in local storage
            localStorage.setItem('loggedIn', 'true');
            document.getElementById('message').innerText = 'Login successful!';
        } else {
            document.getElementById('message').innerText = 'Please fill in all fields.';
        }
    }
});
