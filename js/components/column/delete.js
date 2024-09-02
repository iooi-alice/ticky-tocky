import { openModal, closeModal } from '../modal/modalOpenClose.js';

const columnDeleteButtons = document.querySelectorAll('.task-options-wrapper .delete-button');
const deleteModal = document.getElementById('detele-modal');
const deleteModalCloseButton = deleteModal.querySelector('.cancel-button');

function openColumnDeleteModal() {
  const optionsContainerElement = this.closest('.task-column-options');
  const [kebabButton, options] = optionsContainerElement.children;

  kebabButton.classList.remove('is-active');
  options.classList.remove('is-active');

  openModal(deleteModal);
}

columnDeleteButtons.forEach((button) => {
  button.addEventListener('click', openColumnDeleteModal);
});

deleteModalCloseButton.addEventListener('click', () => closeModal(deleteModal));
deleteModal.addEventListener('close', () => closeModal(deleteModal));
