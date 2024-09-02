import { openModal, closeModal } from '../modal/modalOpenClose.js';
import { inputValidation } from '../input/inputValidator.js';

const columnEditButtons = document.querySelectorAll('.task-column .task-options-wrapper .edit-button');

const columnEditModal = document.getElementById('edit-modal');
const inputElement = columnEditModal.querySelector('.input');
const columnEditModalCloseButton = columnEditModal.querySelector('.cancel-button');
const columnEditModalEditButton = columnEditModal.querySelector('.submit-button');

function openColumnEditModal() {
  const optionsContainerElement = this.closest('.task-column-options');
  const [kebabButton, options] = optionsContainerElement.children;

  kebabButton.classList.remove('is-active');
  options.classList.remove('is-active');

  openModal(columnEditModal);

  const headerElement = this.closest('.task-column-header');
  const columnTitle = headerElement.querySelector('.task-column-title').innerHTML;
  inputElement.value = columnTitle;
}

function closeColumnEditModal() {
  inputElement.value = '';
  inputElement.classList.remove('is-error');

  closeModal(columnEditModal);
}

columnEditButtons.forEach((button) => {
  button.addEventListener('click', openColumnEditModal);
});

columnEditModalCloseButton.addEventListener('click', closeColumnEditModal);
columnEditModal.addEventListener('close', closeColumnEditModal);

inputValidation(inputElement, columnEditModalEditButton);
