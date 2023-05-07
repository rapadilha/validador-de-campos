import validator from 'validator';

import './style.css';

const inputText = document.querySelector('#value');
const selector = document.querySelector('#option');
const button = document.querySelector('#button');
const outText = document.querySelector('#answer');
const UUID_VERSION = 4;

button.addEventListener('click', (event) => {
  event.preventDefault();

  const campos = {
    cpf: validator.isTaxID(inputText.value, 'pt-BR'),
    hexColor: validator.isHexColor(inputText.value),
    email: validator.isEmail(inputText.value),
    uuid: validator.isUUID(inputText.value, UUID_VERSION),
    url: validator.isURL(inputText.value),
  };

  outText.innerHTML = `A validação retornou ${campos[selector.value]}`;
});
