
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}

window.addEventListener('scroll', function () {
    const heart = document.querySelector('.heart');
    heart.style.top = 80 + window.scrollY * 0.5 + 'px';
});
