document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');
    const showSigninLink = document.getElementById('showSignin');
    const showSignupLink = document.getElementById('showSignup');
    const signupFormElement = document.getElementById('signup');
    const signinFormElement = document.getElementById('signin');

    // Function to show sign-in form
    function showSigninForm() {
        signupForm.classList.add('hidden');
        signinForm.classList.remove('hidden');
    }

    // Function to show sign-up form
    function showSignupForm() {
        signinForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    }

    // Event listeners for form switching
    showSigninLink.addEventListener('click', function(e) {
        e.preventDefault();
        showSigninForm();
    });

    showSignupLink.addEventListener('click', function(e) {
        e.preventDefault();
        showSignupForm();
    });

    // Handle sign-up form submission
    signupFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const name = e.target.querySelector('input[type="text"]').value;
        const email = e.target.querySelector('input[type="email"]').value;
        const password = e.target.querySelector('input[type="password"]').value;

        // Simple validation
        if (name.length < 2) {
            alert('Name must be at least 2 characters long');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        // Simulate successful signup
        alert(`Welcome ${name}! Your account has been created successfully.`);
        
        // Reset form
        e.target.reset();
    });

    // Handle sign-in form submission
    signinFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = e.target.querySelector('input[type="text"]').value;
        const password = e.target.querySelector('input[type="password"]').value;

        // Simple validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

        // Simulate successful signin
        alert(`Welcome back! You have been signed in successfully.`);
        
        // Reset form
        e.target.reset();
    });

    // Add smooth transitions
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => {
        form.style.transition = 'opacity 0.3s ease';
    });
});
