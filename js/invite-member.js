const inviteButton = document.querySelector('.invite-button');
const inviteModal = document.getElementById('invite-modal');
const inviteModalCloseButton = document.querySelector('.invite-modal .cancel-button');
const overlay = document.querySelector('.overlay');

function openInviteModal() {
  inviteModal.showModal();
  overlay.style.display = 'block';
}

function closeInviteModal() {
  inviteModal.close();
  overlay.style.display = 'none';
}

inviteButton.addEventListener('click', openInviteModal);
inviteModalCloseButton.addEventListener('click', closeInviteModal);
inviteModal.addEventListener('close', closeInviteModal);
