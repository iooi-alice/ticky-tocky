export function isInputFocus(inputElement) {
  inputElement.classList.add('is-active');
}

export function isInputBlur(inputElement) {
  inputElement.classList.remove('is-active');
}
