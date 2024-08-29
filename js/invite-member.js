import { openModal, closeModal } from '../js/modal.js';

const inviteButton = document.querySelector('.invite-button');
const inviteModal = document.getElementById('invite-modal');
const inviteModalCloseButton = inviteModal.querySelector('.cancel-button');

function closeInviteModal() {
  const inputElement = inviteModal.querySelector('.input');
  inputElement.value = '';

  closeModal(inviteModal);
}

inviteButton.addEventListener('click', () => openModal(inviteModal));
inviteModalCloseButton.addEventListener('click', closeInviteModal);
inviteModal.addEventListener('close', closeInviteModal);
