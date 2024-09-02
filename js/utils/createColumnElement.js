export function createColumnElement(newColumnTitle) {
  const cardElement = document.createElement('article');
  cardElement.className = 'task-column';

  const headerElement = document.createElement('header');
  headerElement.className = 'task-column-header';
  headerElement.innerHTML = `
    <div class="task-column-header-content">
      <h2 class="task-column-title">${newColumnTitle}</h2>
      <span class="task-column-count">0</span>
    </div>
    <div class="task-column-options">
      <button class="icon-btn-outline icon-btn-32" type="button" aria-label="Kebab">
        <img src="./assets/svg/ic-kebab.svg" alt="Kebab icon" />
      </button>
      <div class="task-options-wrapper">
        <ul class="option-list">
          <li class="option-item">
            <button class="edit-button" type="button" aria-label="Option 1">Edit</button>
          </li>
          <li class="option-item">
            <button class="delete-button" type="button" aria-label="Option 2">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  `;

  const cardList = document.createElement('ol');
  cardList.className = 'task-card-list';
  const cardItem = document.createElement('li');
  cardItem.className = 'task-card-item';
  cardItem.innerHTML = `
    <article class="task-card-empty">
      <img src="./assets/svg/ic-empty.svg" alt="Empty icon" />
      <span>No Cards Yet</span>
    </article>
  `;
  cardList.appendChild(cardItem);

  const footer = document.createElement('footer');
  footer.className = 'task-column-footer';
  footer.innerHTML = `
    <button type="button" aria-label="Add schedule">
      <img src="./assets/svg/ic-add-active.svg" alt="add icon" />
      Add Task
    </button>
  `;

  cardElement.append(headerElement, cardList, footer);
  return cardElement;
}
