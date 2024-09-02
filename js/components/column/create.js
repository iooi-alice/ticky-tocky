import { openModal, closeModal } from '../modal/modalOpenClose.js';
import { inputValidation } from '../input/inputValidator.js';
import { createColumnElement } from '../../utils/createColumnElement.js';

const columnCreateButton = document.querySelector('.task-column-empty');

const columnCreateModal = document.getElementById('create-modal');
const inputElement = columnCreateModal.querySelector('.input');
const columnCreateModalCloseButton = columnCreateModal.querySelector('.cancel-button');
const columnCreateModalSubmitButton = columnCreateModal.querySelector('.submit-button');

function openColumnCreateModal() {
  openModal(columnCreateModal);
  inputElement.blur();
}

function closeColumnCreateModal() {
  inputElement.value = '';
  inputElement.classList.remove('is-error');

  closeModal(columnCreateModal);
}

function handleSubmit(e) {
  e.preventDefault();
  if (!inputElement.value.trim()) return;

  const columnList = document.querySelector('.task-column-list');
  const liElement = document.createElement('li');
  liElement.className = 'task-column-item';
  liElement.append(createColumnElement(inputElement.value.trim()));
  columnList.insertBefore(liElement, columnList.lastElementChild);

  closeModal(columnCreateModal);
}

columnCreateButton.addEventListener('click', openColumnCreateModal);
columnCreateModalCloseButton.addEventListener('click', closeColumnCreateModal);
columnCreateModal.addEventListener('close', closeColumnCreateModal);
columnCreateModalSubmitButton.addEventListener('click', handleSubmit);

inputValidation(inputElement, columnCreateModalSubmitButton);
