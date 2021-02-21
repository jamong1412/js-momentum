
const form = document.querySelector(".form-greeting");
const userName = document.querySelector("#userName");
const greeting = document.querySelector(".js-greeting");

const USER_LS = "userName";
const HIDDEN = "hidden";

function paintGreeting(text) {
  form.classList.add(HIDDEN);
  greeting.classList.remove(HIDDEN);
  greeting.innerText = `Hello, ${text}!`;
}

function saveUserName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentUser = userName.value;
  paintGreeting(currentUser);
  saveUserName(currentUser);
}

function loadUserName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    form.classList.remove(HIDDEN);
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  form.addEventListener("submit", handleSubmit);
  loadUserName();
}

init();
