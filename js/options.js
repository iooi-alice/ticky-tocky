const toggleOptionButtons = document.querySelectorAll(
  '.task-column-item .task-column .task-column-options .icon-btn-outline',
);

function closeOptionsOnClickOutside(optionsElement, containerElement) {
  return function (event) {
    if (!containerElement.contains(event.target)) {
      optionsElement.classList.remove('is-active');
      window.removeEventListener('click', closeOptionsOnClickOutside);
    }
  };
}

function handleToggleOptions() {
  const containerElement = this.parentNode;
  const optionsElement = this.nextElementSibling;

  if (!optionsElement.classList.contains('is-active')) {
    window.addEventListener('click', closeOptionsOnClickOutside(optionsElement, containerElement));
  }
  optionsElement.classList.toggle('is-active');
}

toggleOptionButtons.forEach((button) => {
  button.addEventListener('click', handleToggleOptions);
});
