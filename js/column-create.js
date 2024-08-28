const columnCreateButton = document.querySelector('.task-column-empty');
const columnCreateModal = document.getElementById('create-modal');
const columnCreateModalCloseButton = columnCreateModal.querySelector('.cancel-button');

function openColumnCreateModal() {
  columnCreateModal.showModal();
  columnCreateModal.classList.add('is-open');

  overlay.style.display = 'block';
}

function closeColumnCreateModal() {
  const inputElement = columnCreateModal.querySelector('.input');
  inputElement.value = '';

  columnCreateModal.classList.remove('is-open');
  columnCreateModal.close();

  overlay.style.display = 'none';
}

columnCreateButton.addEventListener('click', openColumnCreateModal);
columnCreateModalCloseButton.addEventListener('click', closeColumnCreateModal);
columnCreateModal.addEventListener('close', closeColumnCreateModal);
