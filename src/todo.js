
const toDoForm = document.querySelector(".form-toDo");
const toDoInput = toDoForm.querySelector(".input-toDo");
const toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODO_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDos(toDo.text, toDo.id);
    });
  }
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function paintToDos(text, newId) {
  const item = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  item.appendChild(delBtn);
  item.appendChild(span);
  item.id = newId;
  toDoList.appendChild(item);

  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentToDo = toDoInput.value;
  const newId = Date.now();
  paintToDos(currentToDo, newId);
  toDoInput.value = "";
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
