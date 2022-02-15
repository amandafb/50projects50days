const btnToggle = document.querySelectorAll('.faq-toggle');

btnToggle.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active');
  });
});
