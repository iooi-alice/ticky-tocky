import { openModal, closeModal } from '../modal/modalOpenClose.js';

const columnDeleteButtons = document.querySelectorAll('.task-options-wrapper .delete-button');
const deleteModal = document.getElementById('detele-modal');
const deleteModalCloseButton = deleteModal.querySelector('.cancel-button');
const deleteModalSubmitButton = deleteModal.querySelector('.delete-button');

let columnElement = null;

function openColumnDeleteModal() {
  const optionsContainerElement = this.closest('.task-column-options');
  const [kebabButton, options] = optionsContainerElement.children;
  columnElement = this.closest('.task-column-item');

  kebabButton.classList.remove('is-active');
  options.classList.remove('is-active');

  openModal(deleteModal);
}

function handleSubmit(e) {
  e.preventDefault();
  columnElement.remove();
  closeModal(deleteModal);
}

columnDeleteButtons.forEach((button) => {
  button.addEventListener('click', openColumnDeleteModal);
});

deleteModalCloseButton.addEventListener('click', () => closeModal(deleteModal));
deleteModal.addEventListener('close', () => closeModal(deleteModal));
deleteModalSubmitButton.addEventListener('click', handleSubmit);
