document.getElementById('navbar-button-toggler').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.card-content, .card-content1').forEach(element => {
        element.classList.toggle('dark-mode-card');
    });
});

document.getElementById('backButton').addEventListener('click', () => {
    window.location.href = 'index.html';
});
