export default markup => {
  const cardsListRef = document.querySelector('.gallery');

  cardsListRef.insertAdjacentHTML('beforeend', markup);
};
