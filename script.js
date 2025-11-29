document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        let messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push("Username too short. Minimum 3 characters required.");
        }

        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Invalid email address format.");
        }

        if(password.length < 8) {
            isValid = false;
            messages.push("Password too short, 8 characters minimum.");
        }

        feedbackDiv.style.display = 'block';

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = '#28a745';
        }

        if (!isValid) {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    })
})