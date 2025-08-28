const menuToggle = document.querySelector('#menu-toggle'); // select single element by ID
const navLinks = document.querySelector('#nav-links');     // select single element by ID

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
