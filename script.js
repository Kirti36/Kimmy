// Wait for all resources to load
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    splashScreen.style.opacity = '6'; // Fade out the splash screen
    setTimeout(() => {
        splashScreen.style.display = 'none'; // Hide the splash screen after fade out
    }, 1000);
});


document.addEventListener('DOMContentLoaded', function() {
    const educationItems = document.querySelectorAll('.education-item');

    function checkPosition() {
        const windowHeight = window.innerHeight;
        educationItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight - 100) {
                item.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition();
});