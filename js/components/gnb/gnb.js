const gnbMenuButtons = document.querySelectorAll('.gnb-menu-item a');
const homeImgElement = document.querySelector('.gnb-menu-item.is-home img');

let currentActiveItem = document.querySelector('.gnb-menu-item.is-active');

function updateActiveMenu() {
  const liElement = this.parentNode;

  if (currentActiveItem !== liElement) {
    liElement.classList.add('is-active');
    currentActiveItem.classList.remove('is-active');
    currentActiveItem = liElement;

    updateHomeImgSrc(liElement);
  }
}

function updateHomeImgSrc(activeItem) {
  const isActiveHome = activeItem.classList.contains('is-home');
  const newSrc = isActiveHome ? './assets/svg/ic-dashboard-active.svg' : './assets/svg/ic-dashboard-default.svg';

  homeImgElement.setAttribute('src', newSrc);
}

gnbMenuButtons.forEach((button) => {
  button.addEventListener('click', updateActiveMenu);
});
