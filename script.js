document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        window.scrollBy({
            top: -60,
            behavior: 'smooth'
        });
    });
});

