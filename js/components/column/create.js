import { openModal, closeModal } from '../modal/modalOpenClose.js';
import { inputValidation } from '../input/inputValidator.js';

const columnCreateButton = document.querySelector('.task-column-empty');

const columnCreateModal = document.getElementById('create-modal');
const inputElement = columnCreateModal.querySelector('.input');
const columnCreateModalCloseButton = columnCreateModal.querySelector('.cancel-button');
const columnCreateModalSubmitButton = columnCreateModal.querySelector('.submit-button');

function closeColumnCreateModal() {
  inputElement.value = '';
  inputElement.classList.remove('is-error');

  closeModal(columnCreateModal);
}

columnCreateButton.addEventListener('click', () => openModal(columnCreateModal));
columnCreateModalCloseButton.addEventListener('click', closeColumnCreateModal);
columnCreateModal.addEventListener('close', closeColumnCreateModal);

inputValidation(inputElement, columnCreateModalSubmitButton);
