const columnList = document.querySelectorAll('.task-column');
const columnHeader = document.querySelectorAll('.task-column-header-content');
const columnOptions = document.querySelectorAll('.task-column-options');

const MOBILE_WIDTH = 767;

function toggleColumn() {
  const column = this.closest('.task-column');
  const optionsOpenButton = column.querySelector('.task-column-options');
  optionsOpenButton.classList.toggle('is-empty');
  column.classList.toggle('is-close');
}

function handleResize() {
  const currentInnerWidth = window.innerWidth;

  if (currentInnerWidth < MOBILE_WIDTH) {
    columnList.forEach((column) => {
      column.classList.add('is-close');
    });

    columnOptions.forEach((option) => {
      option.classList.add('is-empty');
    });

    columnHeader.forEach((column) => {
      column.addEventListener('click', toggleColumn);
    });
  } else if (currentInnerWidth > MOBILE_WIDTH) {
    columnList.forEach((column) => {
      column.classList.remove('is-close');
    });

    columnOptions.forEach((option) => {
      option.classList.remove('is-empty');
    });
  }
}

document.addEventListener('DOMContentLoaded', handleResize);
window.addEventListener('resize', handleResize);
