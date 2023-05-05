import refs from "./refs.js";

function addCloseButton(target) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  target.appendChild(span);
}

function addNewTask() {
  const clearInput = () => (refs.myInput.value = "");
  const value = refs.myInput.value.trim();
  if (value === "") {
    alert("Потрібно ввести текст!");

    clearInput();
    return;
  }

  createLi({
    text: value,
  });
  clearInput();
}

function createLi({ text, isDone = false }) {
  const liEl = document.createElement("li");
  liEl.textContent = text;
  if (isDone) liEl.className = "checked";
  refs.myUL.appendChild(liEl);
  addCloseButton(liEl);
}

function handleTasksbehaviour({ target }) {
  if (target.nodeName === "LI") {
    target.classList.toggle("checked");
  } else if (target.classList.contains("close")) {
    target.parentNode.remove();
  }
}
export { addNewTask, handleTasksbehaviour };
