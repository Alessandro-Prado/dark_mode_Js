const btn = document.getElementById('mudaCor');
const body = document.body;

btn.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
    btn.textContent = 'white';
} else {
    btn.textContent = 'dark';
}
});

