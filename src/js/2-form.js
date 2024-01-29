const STORAGE_KEY = 'feedback-form-state';

let obj = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', onInput);
formEl.addEventListener('submit', onSubmit);
document.addEventListener('DOMContentLoaded', renderPage);

function onInput(e) {
  const value = e.target.value;
  const name = e.target.name;

  obj[name] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

function onSubmit(e) {
  e.preventDefault();
  const emailValue = e.target.elements.email.value.trim();
  const messageValue = e.target.elements.message.value.trim();

  if (!emailValue || !messageValue) return alert('zapovny obo*jazkove pole');
  console.log(obj);
  obj = {};
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
}

function renderPage() {
  formEl.elements.email.value = obj.email || '';
  formEl.elements.message.value = obj.message || '';
}
