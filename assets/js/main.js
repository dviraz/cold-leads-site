document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Call lucide.createIcons() to render any new icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const fullName = document.getElementById('full-name').value.trim();
            const email = document.getElementById('work-email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!fullName) {
                alert('Please enter your full name.');
                return;
            }

            if (!email || !email.includes('@')) {
                alert('Please enter a valid work email address.');
                return;
            }

            if (!message) {
                alert('Please enter your message.');
                return;
            }

            // If validation passes
            alert('Thank you for your message! We will get back to you shortly.');
            contactForm.reset();
        });
    }
});
