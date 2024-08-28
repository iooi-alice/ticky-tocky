const inviteButton = document.querySelector('.invite-button');
const inviteModal = document.getElementById('invite-modal');
const inviteModalCloseButton = inviteModal.querySelector('.cancel-button');
const overlay = document.querySelector('.overlay');

function openInviteModal() {
  inviteModal.showModal();
  inviteModal.classList.add('is-open');

  overlay.style.display = 'block';
}

function closeInviteModal() {
  const inputElement = inviteModal.querySelector('.input');
  inputElement.value = '';

  inviteModal.classList.remove('is-open');
  inviteModal.close();

  overlay.style.display = 'none';
}

inviteButton.addEventListener('click', openInviteModal);
inviteModalCloseButton.addEventListener('click', closeInviteModal);
inviteModal.addEventListener('close', closeInviteModal);
