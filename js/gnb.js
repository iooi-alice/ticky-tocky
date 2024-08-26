const gnbMenuButton = document.querySelectorAll('.gnb-menu-item a');

let currentActive = document.querySelector('.gnb-menu-item.is-active');

function menuActive() {
  const liElement = this.parentNode;

  if (currentActive !== liElement) {
    liElement.classList.add('is-active');
    currentActive.classList.remove('is-active');
    currentActive = liElement;
  }
}

gnbMenuButton.forEach((menu) => {
  menu.addEventListener('click', menuActive);
});
