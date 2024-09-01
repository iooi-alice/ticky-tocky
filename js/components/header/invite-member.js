import { openModal, closeModal } from '../modal/modal.js';
import { inputValidation } from '../input/inputValidator.js';

const inviteButton = document.querySelector('.invite-button');
const inviteModal = document.getElementById('invite-modal');
const inputElement = inviteModal.querySelector('.input');
const inviteModalCloseButton = inviteModal.querySelector('.cancel-button');
const inviteModalSubmitButton = inviteModal.querySelector('.submit-button');

function closeInviteModal() {
  inputElement.value = '';
  inputElement.classList.remove('is-error');

  closeModal(inviteModal);
}

inviteButton.addEventListener('click', () => openModal(inviteModal));
inviteModalCloseButton.addEventListener('click', closeInviteModal);
inviteModal.addEventListener('close', closeInviteModal);

inputValidation(inputElement, inviteModalSubmitButton);
