const homeImgElements = document.querySelectorAll('.gnb-menu-item.is-home img');

const gnbMenuButtons = document.querySelectorAll('.gnb-menu-item');
const gnbMenuImages = document.querySelectorAll('.gnb .gnb-menu-item img');

const gnbMobileMenuButtons = document.querySelectorAll('.gnb-mobile .gnb-menu-item');
const gnbMobileMenuImages = document.querySelectorAll('.gnb-mobile .gnb-menu-item img');

let currentActiveItem = document.querySelector('.gnb-menu-item.is-active');

function updateActiveMenu(liElement) {
  if (currentActiveItem !== liElement) {
    currentActiveItem.classList.remove('is-active');
    liElement.classList.add('is-active');
    currentActiveItem = liElement;

    syncMobileMenu(liElement);
    syncPCMenu(liElement);
    updateHomeImgSrc(liElement);
  }
}

function updateHomeImgSrc(activeItem) {
  const isActiveHome = activeItem.classList.contains('is-home');
  const newSrc = isActiveHome ? './assets/svg/ic-dashboard-active.svg' : './assets/svg/ic-dashboard-default.svg';

  homeImgElements.forEach((image) => {
    image.setAttribute('src', newSrc);
  });
}

function syncMobileMenu(activeItem) {
  const activePCImage = activeItem.querySelector('img').getAttribute('alt');

  gnbMobileMenuImages.forEach((gnbMobileImage) => {
    const menuItem = gnbMobileImage.closest('.gnb-menu-item');
    menuItem.classList.toggle('is-active', gnbMobileImage.getAttribute('alt') === activePCImage);
  });
}

function syncPCMenu(activeItem) {
  const activeMobileImage = activeItem.querySelector('img').getAttribute('alt');

  gnbMenuImages.forEach((gnbImage) => {
    const menuItem = gnbImage.closest('.gnb-menu-item');
    menuItem.classList.toggle('is-active', gnbImage.getAttribute('alt') === activeMobileImage);
  });
}

gnbMenuButtons.forEach((menu) => {
  menu.addEventListener('click', function () {
    updateActiveMenu(this);
  });
});

gnbMobileMenuButtons.forEach((menu) => {
  menu.addEventListener('click', function () {
    updateActiveMenu(this);
  });
});
