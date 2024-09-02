import { openModal, closeModal } from '../modal/modalOpenClose.js';
import { inputValidation } from '../input/inputValidator.js';

const inviteMemberList = document.querySelector('.invite-members .member-list');
const inviteAdditionalMembers = document.querySelector('.invite-members .additional-members');

const inviteButton = document.querySelector('.invite-button');
const inviteModal = document.getElementById('invite-modal');
const inputElement = inviteModal.querySelector('.input');
const inviteModalCloseButton = inviteModal.querySelector('.cancel-button');
const inviteModalSubmitButton = inviteModal.querySelector('.submit-button');

const MOBILE_WIDTH = 767;

function closeInviteModal() {
  inputElement.value = '';
  inputElement.classList.remove('is-error');

  closeModal(inviteModal);
}

function handleResize() {
  const currentInnerWidth = window.innerWidth;

  if (currentInnerWidth > MOBILE_WIDTH) {
    inviteAdditionalMembers.innerText = '+2';
  } else if (currentInnerWidth < MOBILE_WIDTH) {
    inviteAdditionalMembers.innerText = '+5';
  }
}

inviteButton.addEventListener('click', () => openModal(inviteModal));
inviteModalCloseButton.addEventListener('click', closeInviteModal);
inviteModal.addEventListener('close', closeInviteModal);
window.addEventListener('resize', handleResize);

inputValidation(inputElement, inviteModalSubmitButton);
