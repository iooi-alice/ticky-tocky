export function createTagElement(tagValue) {
  const liElement = document.createElement('li');
  liElement.innerHTML = `<div class="tag-add">${tagValue}<button class="tag-delete-button" type="button"><img src="./assets/svg/ic-remove-default.svg" alt="Delete icon" /></button></div>`;

  const closeButton = liElement.querySelector('.tag-delete-button');
  closeButton.addEventListener('click', () => liElement.remove());

  return liElement;
}
