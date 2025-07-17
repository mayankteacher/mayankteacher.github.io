document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackMessage = document.getElementById('feedbackMessage');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the form from submitting normally

            // Simulate form submission success/failure
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // In a real application, you would send this data to a server here.
            // Example: using fetch API
            /*
            fetch('/submit-feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showFeedbackMessage('Thank you for your feedback! We appreciate it.', 'success');
                    feedbackForm.reset(); // Clear the form
                } else {
                    showFeedbackMessage('There was an error sending your feedback. Please try again.', 'error');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                showFeedbackMessage('Network error. Please check your connection and try again.', 'error');
            });
            */

            // For now, we'll just show a success message after a delay
            feedbackMessage.classList.remove('hidden', 'success', 'error');
            feedbackMessage.textContent = 'Sending feedback...';

            setTimeout(() => {
                // Simulate success
                showFeedbackMessage('Thank you for your feedback! (This is a demo, no actual data sent)', 'success');
                feedbackForm.reset(); // Clear the form

                // Or simulate an error:
                // showFeedbackMessage('Failed to send feedback. Please try again later.', 'error');
            }, 2000); // Simulate network delay
        });
    }

    function showFeedbackMessage(msg, type) {
        feedbackMessage.textContent = msg;
        feedbackMessage.className = ''; // Clear previous classes
        feedbackMessage.classList.add(type);
        feedbackMessage.classList.remove('hidden');
    }
});
