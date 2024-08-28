const columnEditButtons = document.querySelectorAll('.task-options-wrapper .edit-button');
const columnEditModal = document.getElementById('edit-modal');
const columnEditModalCloseButton = columnEditModal.querySelector('.cancel-button');

function openColumnEditModal() {
  const optionsContainerElement = this.closest('.task-column-options');
  const [kebabButton, options] = optionsContainerElement.children;

  kebabButton.classList.remove('is-active');
  options.classList.remove('is-active');

  columnEditModal.showModal();
  columnEditModal.classList.add('is-open');

  overlay.style.display = 'block';
}

function closeColumnEditModal() {
  columnEditModal.classList.remove('is-open');
  columnEditModal.close();

  overlay.style.display = 'none';
}

columnEditButtons.forEach((button) => {
  button.addEventListener('click', openColumnEditModal);
});

columnEditModalCloseButton.addEventListener('click', closeColumnEditModal);
columnEditModal.addEventListener('close', closeColumnEditModal);
