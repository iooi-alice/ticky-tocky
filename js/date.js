const dateInput = document.querySelector('.date-field input');

dateInput.addEventListener('focus', () => dateInput.classList.add('is-active'));
dateInput.addEventListener('blur', () => dateInput.classList.remove('is-active'));
