const profileButton = document.querySelector('.profile');
const profileArrowIcon = profileButton.querySelector('.profile-info img');

function toggleProfileModal() {
  profileButton.classList.toggle('is-active');

  if (profileButton.classList.contains('is-active')) {
    profileArrowIcon.setAttribute('src', './assets/svg/ic-profile-arrow-down-active.svg');
    profileArrowIcon.style.transform = 'rotate(180deg)';
  } else {
    profileArrowIcon.setAttribute('src', './assets/svg/ic-profile-arrow-down.svg');
    profileArrowIcon.style.transform = 'rotate(0deg)';
  }
}

profileButton.addEventListener('click', toggleProfileModal);
