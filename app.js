// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the form element using its class name
    var form = document.querySelector('.form');

    // Attach a submit event listener to the form
    form.addEventListener('submit', function (event) {
        // Prevent the form from submitting in the traditional way
        event.preventDefault();

        // Get the value of the email input field by its ID
        var emailInput = document.getElementById('email').value;

        // Validate the email format using a helper function
        if (validateEmail(emailInput)) {
            // If the email is valid, you can submit the form or perform other actions
            alert('Form submitted successfully!');
            // Uncomment the line below to submit the form
            form.submit();
        } else {
            // If the email is not valid, you can display an error message or take other actions
            alert('Please enter a valid email address.');
        }
    });

    // Helper function to validate email format using a regular expression
    function validateEmail(email) {
        // Use a simple regex for email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Return true if the email matches the regex, indicating a valid email format
        return emailRegex.test(email);
    }
});