const columnList = document.querySelectorAll('.task-column');
const MOBILE_WIDTH = 767;

function toggleColumn() {
  this.classList.toggle('is-close');
}

function handleResize() {
  const currentInnerWidth = window.innerWidth;

  if (currentInnerWidth < MOBILE_WIDTH) {
    columnList.forEach((column) => {
      column.classList.add('is-close');
    });
  } else if (currentInnerWidth > MOBILE_WIDTH) {
    columnList.forEach((column) => {
      column.classList.remove('is-close');
    });
  }
}

document.addEventListener('DOMContentLoaded', handleResize);

columnList.forEach((column) => {
  column.addEventListener('click', toggleColumn);
});

window.addEventListener('resize', handleResize);
