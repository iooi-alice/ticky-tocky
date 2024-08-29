import { openModal, closeModal } from '../js/modal.js';

const cards = document.querySelectorAll('.task-card');
const cardDetailModal = document.getElementById('modal-detail');
const cardDetailModalCloseButton = cardDetailModal.querySelector('.cancel-button');

const [modalColumnName, modalCardName] = cardDetailModal.querySelector('.modal-header-title').children;

const commentTextField = cardDetailModal.querySelector('.text-field');
const commentTextarea = cardDetailModal.querySelector('.text-field-content');
const commentResetButton = cardDetailModal.querySelector('.reset-button');
const commentSubmitButton = cardDetailModal.querySelector('.submit-button');
const commentList = cardDetailModal.querySelector('.comment-list');

function updateCommnet(columnName, cardName) {
  modalColumnName.innerHTML = columnName.innerHTML;
  modalCardName.innerHTML = cardName.innerHTML;
}

function createCommentElement(newComment) {
  const liElement = document.createElement('li');
  liElement.className = 'comment-item';
  liElement.innerHTML = `  <article class="comment">
  <div class="avatar-24">
    <img src="./assets/images/profile-avatar.jpg" alt="Avatar" />
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

  updateCommnet(columnName, cardName);
  openModal(cardDetailModal);
}

function onInputComment(e) {
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

commentSubmitButton.addEventListener('click', handleCommentsSubmit);
commentResetButton.addEventListener('click', resetCommentTextarea);
commentTextarea.addEventListener('focus', () => commentTextField.classList.add('is-active'));
commentTextarea.addEventListener('blur', () => commentTextField.classList.remove('is-active'));
commentTextarea.addEventListener('input', onInputComment);
