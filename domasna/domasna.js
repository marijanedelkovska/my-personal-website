document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Simulate form submission (replace with actual backend handling)
            const formData = new FormData(contactForm);
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });

            // Example: Logging form data
            console.log('Form Data:', formDataObject);

            // Display a success message (simulate)
            const confirmationMessage = document.createElement('p');
            confirmationMessage.textContent = 'Message sent successfully!';
            confirmationMessage.classList.add('success-message');
            contactForm.appendChild(confirmationMessage);

            // Reset form after submission (optional)
            contactForm.reset();
        });
    }

    // Toggle active class on navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(otherLink => otherLink.classList.remove('active'));

            // Add 'active' class to the clicked link
            link.classList.add('active');
        });
    });
});
