export function closeOptionsOnClickOutside(buttonElement, optionsElement, containerElement) {
  return function (event) {
    if (!containerElement.contains(event.target)) {
      optionsElement.classList.remove('is-active');
      buttonElement.classList.remove('is-active');

      window.removeEventListener('click', closeOptionsOnClickOutside);
    }
  };
}

export function handleToggleOptions() {
  const containerElement = this.parentNode;
  const optionsElement = this.nextElementSibling;

  if (!optionsElement.classList.contains('is-active')) {
    window.addEventListener('click', closeOptionsOnClickOutside(this, optionsElement, containerElement));
  }
  this.classList.toggle('is-active');
  optionsElement.classList.toggle('is-active');
}
