const STOREGE_KEY = 'feedback-form-state';

let obj = JSON.parse(localStorage.getItem(STOREGE_KEY)) || {};

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', onInput);
formEl.addEventListener('submit', onSubmit);
document.addEventListener('DOMContentLoaded', renderPage);

function onInput(e) {
  const value = e.target.value;
  const name = e.target.name;

  obj[name] = value;

  localStorage.setItem(STOREGE_KEY, JSON.stringify(obj));
}

function onSubmit(e) {
  e.preventDefault();
  const emailValue = e.target.elements.email.value;
  const messageValue = e.target.elements.message.value;

  if (!emailValue || !messageValue) return alert('zapovny obo*jazkove pole');
  console.log(obj);
  obj = {};
  localStorage.removeItem(STOREGE_KEY);
  e.target.reset;
}

function renderPage() {
  formEl.elements.email.value = obj.email || '';
  formEl.elements.message.value = obj.message || '';
}
