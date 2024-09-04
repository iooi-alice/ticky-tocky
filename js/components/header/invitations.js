const invitations = document.querySelector('.invitations');
const [invitationsButton, invitationsModal] = invitations.children;
const acceptButtons = invitationsModal.querySelectorAll('.button-group .btn-secondary');
const denyButtons = invitationsModal.querySelectorAll('.button-group .btn-outline');

function closeInvitationsOnClickOutside(modal, containerElement) {
  return function (event) {
    if (!containerElement.contains(event.target)) {
      modal.classList.remove('is-active');
      invitationsButton.classList.remove('is-active');

      window.removeEventListener('click', closeInvitationsOnClickOutside);
    }
  };
}

function toggleInvitationsModal() {
  if (!invitationsModal.classList.contains('is-active')) {
    window.addEventListener('click', closeInvitationsOnClickOutside(invitationsModal, invitations));
  }
  invitationsModal.classList.toggle('is-active');
  invitationsButton.classList.toggle('is-active');
}

function handleInvitationAction(e) {
  e.stopPropagation();
  const item = this.closest('.invitation-item');
  item.remove();
}

invitationsButton.addEventListener('click', toggleInvitationsModal);

[...acceptButtons, ...denyButtons].forEach((button) => {
  button.addEventListener('click', handleInvitationAction);
});
