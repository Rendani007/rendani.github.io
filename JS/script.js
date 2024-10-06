let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// Get the elements
const popup = document.getElementById('popup');
const readMoreBtn = document.getElementById('readMoreBtn');
const closeBtn = document.getElementById('btnClose');

// Show the popup when "Read More" is clicked
readMoreBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popup.style.display = 'flex';
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
});

// Close the popup when clicking outside of the popup content
window.addEventListener('click', function (e) {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
