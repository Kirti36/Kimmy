// Wait for all resources to load
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    splashScreen.style.opacity = '6'; // Fade out the splash screen
    setTimeout(() => {
        splashScreen.style.display = 'none'; // Hide the splash screen after fade out
    }, 1000); // Adjust timing as needed
});

// Once the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    const educationSection = document.querySelector('#education');
    const educationItems = document.querySelectorAll('.education-item');


    // Function to check if education section is in viewport and animate items
    function animateEducationItems() {
        const sectionTop = educationSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            educationItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }
    }

    // Initial check on page load
    animateEducationItems();

    // Listen for scroll events to trigger animation
    window.addEventListener('scroll', animateEducationItems);
});