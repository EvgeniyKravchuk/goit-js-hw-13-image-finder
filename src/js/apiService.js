import cardsMarkupTpl from '../templates/cards.hbs';
import renderCardsMarkup from './renderCardsMarkup';

const API_KEY = '21772980-f3f3fa10a5805ecf974b45a4f';
const API_URL = 'https://pixabay.com/api/';

export default function findImages(imagesTag, page) {
  fetch(
    `${API_URL}?image_type=photo&orientation=horizontal&q=${imagesTag}&page=${page}&per_page=12&key=${API_KEY}`,
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      renderCardsMarkup(cardsMarkupTpl(data.hits, page));
    })
    .catch(error => console.log(error));
}
