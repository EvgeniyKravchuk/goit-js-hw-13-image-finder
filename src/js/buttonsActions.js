import findImages from './apiService';
import inputValue from './takeInputValue';

const cardsListRef = document.querySelector('.gallery');
let page = 1;

const buttonsRef = {
  search: document.querySelector('.input-button[data-action="search"]'),
  clear: document.querySelector('.input-button[data-action="clear"]'),
  loadMore: document.querySelector('.input-button[data-action="load-more"]'),
};

// for page pagination

function incrementPage() {
  page += 1;
}

function decrementPage() {
  page = 1;
}

//If click buttons on screen:

function interactionWithWindowButtons() {
  buttonsRef.search.addEventListener('click', onSearchButtonClick);
  buttonsRef.loadMore.addEventListener('click', onLoadMoreButtonClick);
  buttonsRef.clear.addEventListener('click', onClearButtonClick);

  disableButtons();
}

function onSearchButtonClick(e) {
  cardsListRef.innerHTML = '';

  enebleButtons();
  findImages(inputValue(), page);
}

function onLoadMoreButtonClick(e) {
  incrementPage();
  findImages(inputValue(), page);
  setTimeout(scroll, 600);
}

function onClearButtonClick(e) {
  cardsListRef.innerHTML = '';

  disableButtons();
  decrementPage();
}

//If click on button on keyboard:

function interactWithKeyboardButtons() {
  const inputRef = document.querySelector('#search-form input');

  inputRef.addEventListener('keypress', onEnterButtonClick);
}

function onEnterButtonClick(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    cardsListRef.innerHTML = '';
    findImages(inputValue());
  }

  enebleButtons();
}

function scroll() {
  window.scrollTo({
    top: buttonsRef.loadMore.offsetTop,
    left: 0,
    behavior: 'smooth',
  });
}

function enebleButtons() {
  buttonsRef.loadMore.disabled = false;
  buttonsRef.clear.disabled = false;
}

function disableButtons() {
  buttonsRef.loadMore.disabled = true;
  buttonsRef.clear.disabled = true;
}

interactionWithWindowButtons();
interactWithKeyboardButtons();
