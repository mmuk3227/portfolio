const themeToggleBtn = document.getElementById('theme-toggle');

// Check saved theme from browser memory
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggleBtn.innerText = '☀️ Light';
}

// Toggle click event
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        themeToggleBtn.innerText = '☀️ Light';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggleBtn.innerText = '🌙 Dark';
        localStorage.setItem('theme', 'dark');
    }
});