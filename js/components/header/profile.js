const profile = document.querySelector('.profile');
const [profileButton, profileModal] = profile.children;
const profileArrowIcon = profileButton.querySelector('.profile-button-info img');

function closeProfileOnClickOutside(modal, containerElement) {
  return function (event) {
    if (!containerElement.contains(event.target)) {
      modal.classList.remove('is-active');
      profileButton.classList.remove('is-active');
      profileArrowIcon.setAttribute('src', './assets/svg/ic-profile-arrow-down.svg');
      profileArrowIcon.style.transform = 'rotate(0deg)';

      window.removeEventListener('click', closeProfileOnClickOutside);
    }
  };
}

function toggleProfileModal() {
  if (!profileModal.classList.contains('is-active')) {
    window.addEventListener('click', closeProfileOnClickOutside(profileModal, profile));
  }

  profileButton.classList.toggle('is-active');
  profileModal.classList.toggle('is-active');

  if (profileButton.classList.contains('is-active')) {
    profileArrowIcon.setAttribute('src', './assets/svg/ic-profile-arrow-down-active.svg');
    profileArrowIcon.style.transform = 'rotate(180deg)';
  } else {
    profileArrowIcon.setAttribute('src', './assets/svg/ic-profile-arrow-down.svg');
    profileArrowIcon.style.transform = 'rotate(0deg)';
  }
}

profileButton.addEventListener('click', toggleProfileModal);
