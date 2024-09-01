export function isEmptyInputValue(inputElement) {
  if (inputElement.value.length === 0) {
    inputElement.classList.add('is-error');
  }
}

export function onInputChange(e) {
  const inputElement = e.target;

  if (inputElement.value.length > 0) {
    inputElement.classList.remove('is-error');
  }
}

export function onInvalidInput(e) {
  const inputElement = e.target;
  inputElement.classList.add('is-error');
}

export function inputValidation(inputElement, submitButton) {
  submitButton.addEventListener('click', () => isEmptyInputValue(inputElement));
  inputElement.addEventListener('input', onInputChange);
  inputElement.addEventListener('invalid', onInvalidInput);
}
