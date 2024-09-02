import { cardCreateModal, cardColumnNameTag, cardTitleInput, cardTextarea, dateInput, tagList } from './create.js';
import { handleToggleOptions } from '../option/toggleOptions.js';
import { createTagElement } from '../../utils/createTagElement.js';
import { openModal, closeModal } from '../modal/modalOpenClose.js';

const cardDetailModal = document.getElementById('modal-detail');
const cardDetailAuthor = cardCreateModal.querySelector('.form-field-right .author');
const optionToggleButton = cardDetailModal.querySelector('.task-column-options .icon-btn-outline');
const cardEditButton = cardDetailModal.querySelector('.task-column-options .edit-button');

function extractCardDetails(detailModal) {
  const columnName = detailModal.querySelector('.tag-column-name').textContent;
  const cardName = detailModal.querySelector('.modal-header-title h2').textContent;
  const author = detailModal.querySelector('.detail-header-author .author').textContent;
  const deadline = detailModal
    .querySelector('.detail-header-deadline .deadline')
    .textContent.split(' ')[0]
    .replaceAll('.', '-');
  const description = detailModal.querySelector('.detail-description p').textContent.replace(/\s+/g, ' ').trim();
  const tags = Array.from(detailModal.querySelectorAll('.tag-list .tag')).map((tag) => tag.textContent);

  return {
    columnName,
    cardName,
    author,
    deadline,
    description,
    tags,
  };
}

function setDefaultValue({ columnName, cardName, author, deadline, description, tags }) {
  cardColumnNameTag.innerHTML = columnName;
  cardDetailAuthor.innerHTML = author;
  cardTitleInput.value = cardName;
  cardTextarea.value = description;
  dateInput.value = deadline;

  tags.forEach((tagValue) => {
    tagList.append(createTagElement(tagValue));
  });
}

function openCardEditModal() {
  closeModal(cardDetailModal);
  openModal(cardCreateModal);

  const detailModal = this.closest('.modal-detail');
  const defaultValueData = extractCardDetails(detailModal);
  setDefaultValue(defaultValueData);
}

optionToggleButton.addEventListener('click', handleToggleOptions);
cardEditButton.addEventListener('click', openCardEditModal);
