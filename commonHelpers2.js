import"./assets/modulepreload-polyfill-ec808ebb.js";const s="feedback-form-state";let t=JSON.parse(localStorage.getItem(s))||{};const a=document.querySelector(".feedback-form");a.addEventListener("input",l);a.addEventListener("submit",r);document.addEventListener("DOMContentLoaded",m);function l(e){const n=e.target.value,o=e.target.name;t[o]=n,localStorage.setItem(s,JSON.stringify(t))}function r(e){e.preventDefault();const n=e.target.elements.email.value.trim(),o=e.target.elements.message.value.trim();if(!n||!o)return alert("zapovny obo*jazkove pole");console.log(t),t={},localStorage.removeItem(s),e.target.reset()}function m(){a.elements.email.value=t.email||"",a.elements.message.value=t.message||""}
//# sourceMappingURL=commonHelpers2.js.map