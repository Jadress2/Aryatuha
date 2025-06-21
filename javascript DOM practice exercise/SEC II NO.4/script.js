const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.body.classList.add(currentTheme);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');

  const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
});