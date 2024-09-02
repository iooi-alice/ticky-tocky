import { openModal, closeModal } from '../modal/modalOpenClose.js';
import { isInputFocus, isInputBlur } from '../input/inputFocusBlur.js';

const cards = document.querySelectorAll('.task-card');

const cardDetailModal = document.getElementById('modal-detail');
const [modalColumnName, modalCardName] = cardDetailModal.querySelector('.modal-header-title').children;
const detailDeadline = cardDetailModal.querySelector('.detail-header-deadline .deadline');
const commentTextField = cardDetailModal.querySelector('.text-field');
const commentTextarea = cardDetailModal.querySelector('.text-field textarea');
const commentList = cardDetailModal.querySelector('.comment-list');
const cardDetailModalCloseButton = cardDetailModal.querySelector('.cancel-button');
const commentResetButton = cardDetailModal.querySelector('.reset-button');
const commentSubmitButton = cardDetailModal.querySelector('.submit-button');

function updateHeaderTitle(columnName, cardName) {
  modalColumnName.innerHTML = columnName.innerHTML;
  modalCardName.innerHTML = cardName.innerHTML;
}

function createCommentElement(newComment) {
  const liElement = document.createElement('li');
  liElement.className = 'comment-item';
  liElement.innerHTML = `<article class="comment">
  <div class="avatar-24">
    <img src="./assets/images/profile-avatar-alice.jpg" alt="Avatar" />
  </div>

  <div class="comment-content">
    <div class="comment-content-header">
      <span class="author">Alice</span>
      <span class="time">• a few seconds ago</span>
      <div class="tag-update">updated</div>
    </div>
    <p>${newComment}</p>
  </div>
</article>`;

  return liElement;
}

function handleCardClick() {
  const columnHeaderContent = this.closest('.task-column').querySelector('.task-column-header-content');
  const columnName = columnHeaderContent.querySelector('.task-column-title');
  const cardName = this.querySelector('.task-card-title');
  const deadline = this.querySelector('.task-card-date').innerText;

  detailDeadline.innerText = deadline;

  updateHeaderTitle(columnName, cardName);
  openModal(cardDetailModal);
}

function onInputChange(e) {
  const comment = e.target.value;

  if (comment.length > 0) {
    commentTextField.classList.remove('is-error');
  }
}

function handleCommentsSubmit(e) {
  e.preventDefault();
  const comment = this.closest('.text-field').querySelector('.text-field-content').value;
  if (!comment) {
    commentTextField.classList.add('is-error');
    return;
  } else {
    const commentElement = createCommentElement(comment);
    commentTextField.classList.remove('is-error');
    commentList.insertBefore(commentElement, commentList.firstChild);
  }

  resetCommentTextarea();
}

function resetCommentTextarea() {
  commentTextarea.value = '';
}

function handleModalClose() {
  commentTextarea.value = '';
  commentTextField.classList.remove('is-error');
  closeModal(cardDetailModal);
}

cards.forEach((card) => {
  card.addEventListener('click', handleCardClick);
});
cardDetailModalCloseButton.addEventListener('click', handleModalClose);
cardDetailModal.addEventListener('close', handleModalClose);

commentTextarea.addEventListener('input', onInputChange);
commentResetButton.addEventListener('click', resetCommentTextarea);
commentSubmitButton.addEventListener('click', handleCommentsSubmit);

commentTextarea.addEventListener('focus', () => isInputFocus(commentTextField));
commentTextarea.addEventListener('blur', () => isInputBlur(commentTextField));
