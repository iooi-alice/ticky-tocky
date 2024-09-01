import { openModal, closeModal } from '../modal/modal.js';
import { isInputFocus, isInputBlur } from '../input/inputFocusBlur.js';
import { inputValidation } from '../input/inputValidator.js';
import { createTagElement } from '../../utils/createTagElement.js';

const cardCreateButtons = document.querySelectorAll('.task-column .task-column-footer button');

export const cardCreateModal = document.getElementById('modal-create-card');
const fileInputContainer = document.querySelector('.form-field-left .input-file');
const fileInput = document.querySelector('.form-field-left .input');
const fileUploadInfo = fileInputContainer.querySelector('.file-upload-info');
const fileResetButton = document.querySelector('.form-field-left .reset-button');
export const cardColumnNameTag = cardCreateModal.querySelector('.form-field-right .tag-column-name');
export const cardTitleInput = cardCreateModal.querySelector('.form-field-right .card-title');
export const cardTextarea = cardCreateModal.querySelector('.form-field-right .card-desc');
export const dateInput = cardCreateModal.querySelector('.date-field input');
export const tagGroup = cardCreateModal.querySelector('.tag-group');
export const [tagList, tagInput] = tagGroup.children;
const cardCreateModalCloseButton = cardCreateModal.querySelector('.cancel-button');
const cardCreateModalSubmitButton = cardCreateModal.querySelector('.submit-button');

function openCardCreateModal() {
  const column = this.closest('.task-column');
  const columnName = column.querySelector('.task-column-header-content .task-column-title').innerHTML;

  cardColumnNameTag.innerHTML = columnName;
  openModal(cardCreateModal);
}

function closeCardCreateModal() {
  const inputElements = cardCreateModal.querySelectorAll('input');
  const textarea = cardCreateModal.querySelector('textarea');

  closeModal(cardCreateModal);

  inputElements.forEach((input) => (input.value = ''));
  textarea.value = '';
  tagList.innerHTML = '';
  cardTitleInput.classList.remove('is-error');
  cardTextarea.classList.remove('is-error');
  dateInput.classList.remove('is-error');
  resetFileInput();
}

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
  fileInput.value = '';
}

// tag 리스트 추가
function onTagInputChange(e) {
  const inputValue = e.target.value;

  if (inputValue) {
    const newTag = createTagElement(inputValue);
    tagList.append(newTag);
    tagInput.value = '';
  }
}

function preventEnterKey(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    onTagInputChange(e);
  }
}

cardCreateButtons.forEach((button) => {
  button.addEventListener('click', openCardCreateModal);
});
cardCreateModalCloseButton.addEventListener('click', closeCardCreateModal);
cardCreateModal.addEventListener('close', closeCardCreateModal);

fileInput.addEventListener('change', onImageChange);
fileResetButton.addEventListener('click', resetFileInput);
tagInput.addEventListener('keydown', preventEnterKey);

dateInput.addEventListener('focus', () => isInputFocus(dateInput));
dateInput.addEventListener('blur', () => isInputBlur(dateInput));
tagInput.addEventListener('focus', () => isInputFocus(tagGroup));
tagInput.addEventListener('blur', () => isInputBlur(tagGroup));

inputValidation(cardTitleInput, cardCreateModalSubmitButton);
inputValidation(cardTextarea, cardCreateModalSubmitButton);
inputValidation(dateInput, cardCreateModalSubmitButton);
