// The navbar can be shown by clicking on the hamburger menu when the user is on mobile
const toggle_button = document.querySelector('.nav-toggle');
const mobile_navbar = document.querySelector('.nav-mobile');

// The navbar designed for mobile screens shows when the user clicks on the hamburger menu
toggle_button.addEventListener('click', function () {
mobile_navbar.classList.toggle('show');
});


// Handles the 'About Us' dropdown menu for mobile screens
const about_button = document.querySelector('.about-mobile');
const dropdown = document.querySelector('.about-dropdown-mobile');

// Performs a boolean to check if the user is on mobile
function userOnMobile() {return window.innerWidth <= 768;}

// Runs when the user taps on the 'About Us' button
about_button.addEventListener('click', function (clickEvent) {
    if (userOnMobile()) {
        clickEvent.preventDefault();
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none'
        } else {
            dropdown.style.display = 'block'
        }
    }
});

