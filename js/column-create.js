import { openModal, closeModal } from '../js/modal.js';

const columnCreateButton = document.querySelector('.task-column-empty');
const columnCreateModal = document.getElementById('create-modal');
const columnCreateModalCloseButton = columnCreateModal.querySelector('.cancel-button');

function closeColumnCreateModal() {
  const inputElement = columnCreateModal.querySelector('.input');
  inputElement.value = '';

  closeModal(columnCreateModal);
}

columnCreateButton.addEventListener('click', () => openModal(columnCreateModal));
columnCreateModalCloseButton.addEventListener('click', closeColumnCreateModal);
columnCreateModal.addEventListener('close', closeColumnCreateModal);
