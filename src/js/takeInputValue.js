const inputRef = document.querySelector('#search-form');
inputRef.addEventListener('input', takeInputValue);
let inputValue = '';

export default () => {
  return inputValue;
};

function takeInputValue(e) {
  inputValue = e.target.value;
}
