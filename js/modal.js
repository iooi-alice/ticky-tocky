const overlay = document.querySelector('.overlay');

export function openModal(modal) {
  modal.showModal();
  modal.classList.add('is-open');
  overlay.style.display = 'block';
}

export function closeModal(modal) {
  modal.close();
  modal.classList.remove('is-open');
  overlay.style.display = 'none';
}
