import { openModal, closeModal } from '../js/modal.js';

const cardCreateButtons = document.querySelectorAll('.task-column .task-column-footer button');
const cardCreateModal = document.getElementById('modal-create-card');
const cardCreateModalCloseButton = cardCreateModal.querySelector('.cancel-button');

const fileInputContainer = document.querySelector('.form-field-left .input-file');
const fileInput = document.querySelector('.form-field-left .input');
const fileUploadInfo = fileInputContainer.querySelector('.file-upload-info');
const fileResetButton = document.querySelector('.form-field-left .reset-button');

const tagGroup = cardCreateModal.querySelector('.tag-group');
const [tagList, tagInput] = tagGroup.children;

// 모달 열기, 닫기
function closeCardCreateModal() {
  const inputElements = cardCreateModal.querySelectorAll('input');
  const textarea = cardCreateModal.querySelector('textarea');

  closeModal(cardCreateModal);

  inputElements.forEach((input) => (input.value = ''));
  textarea.value = '';
  tagList.innerHTML = '';
  resetFileInput();
}

cardCreateButtons.forEach((button) => {
  button.addEventListener('click', () => openModal(cardCreateModal));
});
cardCreateModalCloseButton.addEventListener('click', closeCardCreateModal);
cardCreateModal.addEventListener('close', closeCardCreateModal);

// 이미지 미리보기
function onImageChange(event) {
  const file = event.target.files[0];

  if (!file) {
    resetFileInput();
    return;
  }

  const imagePreviewUrl = URL.createObjectURL(file);
  updateImagePreview(imagePreviewUrl);

  fileInput.addEventListener(
    'load',
    () => {
      URL.revokeObjectURL(imagePreviewUrl);
    },
    { once: true },
  );
}

function updateImagePreview(url) {
  fileUploadInfo.style.display = 'none';
  fileInputContainer.style.background = `url(${url}) no-repeat center / cover`;
}

function resetFileInput() {
  fileUploadInfo.style.display = 'flex';
  fileInputContainer.style.background = '';
}

fileInput.addEventListener('change', onImageChange);
fileResetButton.addEventListener('click', resetFileInput);

// tag 리스트 추가
function createTagElement(tagValue) {
  const liElement = document.createElement('li');
  liElement.innerHTML = `<div class="tag-add">${tagValue}<button class="tag-delete-button" type="button"><img src="./assets/svg/ic-remove-default.svg" alt="Delete icon" /></button></div>`;

  const closeButton = liElement.querySelector('.tag-delete-button');
  closeButton.addEventListener('click', () => liElement.remove());

  return liElement;
}

function onTagInputChange(e) {
  const inputValue = e.target.value;

  if (inputValue) {
    const tag = createTagElement(inputValue);
    tagList.append(tag);
    tagInput.value = '';
  }
}

function preventEnterKey(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    onTagInputChange(e);
  }
}

tagInput.addEventListener('keydown', preventEnterKey);
tagInput.addEventListener('focus', () => tagGroup.classList.add('is-active'));
tagInput.addEventListener('blur', () => tagGroup.classList.remove('is-active'));
