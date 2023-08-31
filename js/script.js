// JavaScript for mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('.navbar-nav');

    navbarToggler.addEventListener('click', function () {
        navbarNav.classList.toggle('active');
    });
});
