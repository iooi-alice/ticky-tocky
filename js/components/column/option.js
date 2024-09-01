import { handleToggleOptions } from '../option/toggleOptions.js';

const toggleOptionButtons = document.querySelectorAll(
  '.task-column-item .task-column .task-column-options .icon-btn-outline',
);

toggleOptionButtons.forEach((button) => {
  button.addEventListener('click', handleToggleOptions);
});
