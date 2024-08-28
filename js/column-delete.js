const columnDeleteButtons = document.querySelectorAll('.task-options-wrapper .delete-button');
const deleteModal = document.getElementById('detele-modal');
const deleteModalCloseButton = deleteModal.querySelector('.cancel-button');

function openColumnDeleteModal() {
  const optionsContainerElement = this.closest('.task-column-options');
  const [kebabButton, options] = optionsContainerElement.children;

  kebabButton.classList.remove('is-active');
  options.classList.remove('is-active');

  deleteModal.showModal();
  deleteModal.classList.add('is-open');

  overlay.style.display = 'block';
}

function closeColumnDeleteModal() {
  deleteModal.classList.remove('is-open');
  deleteModal.close();

  overlay.style.display = 'none';
}

columnDeleteButtons.forEach((button) => {
  button.addEventListener('click', openColumnDeleteModal);
});

deleteModalCloseButton.addEventListener('click', closeColumnDeleteModal);
deleteModal.addEventListener('close', closeColumnDeleteModal);
