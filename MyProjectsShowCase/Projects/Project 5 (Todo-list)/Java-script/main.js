let page = document.querySelector(".page");
let input = document.querySelector(".tasks input");
let tasksContainer = document.querySelector(".append");
let num = document.querySelector(".num");
let showAll = document.querySelector(".All");
let showActive = document.querySelector(".Active");
let showComp = document.querySelector(".Completed");
let clearComp = document.querySelector(".Clear-Completed");
let theme = document.querySelector(".l-d-mode");

if (localStorage.length !== 0) {
  let tasks = [];
  for (let i = 0; i < localStorage.length; i++) {
    let text = localStorage.getItem(`Key ${i + 1}`);
    if (text) {
      let isDone = text.includes("🗸");
      if (isDone) {
        text = text.split("🗸").join("");
      }
      let myTask = createElement("span", "class", "task", text);
      myTask.append(createElement("i", "class", "circle"));
      myTask.append(createElement("span", "class", "cross"));
      tasksContainer.append(myTask);
      if (isDone) {
        myTask.setAttribute("done", "");
      }
      tasks.push(myTask);
    }
  }
  tasks.forEach((task) => {
    if (task.innerText.split("").includes("🗸")) {
      task.innerText = task.innerText.split("🗸").join("");
      task.setAttribute("done", "");
    }
  });
  num.innerText = itemsCount();
  toggleDone();
  removeTask();
}
function createElement(element, attr, val = "", elementText = "") {
  let el = document.createElement(element);
  attr ? el.setAttribute(attr, val) : "";
  el.innerText = elementText;
  return el;
}
function getKeyByValue(value) {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (localStorage.getItem(key) === value) {
      return key;
    }
  }
  return null;
}
function itemsCount() {
  let counter = 0;
  document.querySelectorAll(".task").forEach((e) => {
    e.hasAttribute("done") ? "" : counter++;
  });
  return counter;
}
function addTaskToDOM() {
  let mySpan = createElement("span", "class", "task", input.value);
  tasksContainer.prepend(mySpan);
  mySpan.append(createElement("i", "class", "circle"));
  mySpan.append(createElement("span", "class", "cross"));
}
function addTaskToLocalStorage() {
  localStorage.setItem(`Key ${localStorage.length + 1}`, input.value);
  input.value = "";
}
function toggleDone() {
  document.querySelectorAll(".task").forEach((e) => {
    e.onclick = () => {
      let key = getKeyByValue(e.innerText);
      let storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        let checkArr = storedValue.split("");
        if (checkArr.includes("🗸")) {
          localStorage.setItem(key, e.innerText);
        } else {
          localStorage.setItem(key, e.innerText + "🗸");
        }
      } else {
        key = getKeyByValue(e.innerText + "🗸");
        storedValue = localStorage.getItem(key) + "🗸";
        localStorage.setItem(key, e.innerText);
      }
      e.toggleAttribute("done");
      num.innerText = itemsCount();
    };
  });
}
function removeTask() {
  document.querySelectorAll(".task").forEach((e) => {
    e.querySelector(".cross").onclick = () => {
      localStorage.removeItem(getKeyByValue(e.innerText));
      e.remove();
      num.innerText = itemsCount();
    };
  });
  setTimeout(() => localStorage.removeItem('null'), 1)
}
function showAllTasks() {
  document.querySelectorAll(".task").forEach((e) => {
    e.hasAttribute("hidden") ? e.removeAttribute("hidden") : "";
  });
}
function showCompleatedTasks() {
  document.querySelectorAll(".task").forEach((e) => {
    e.hasAttribute("hidden") ? e.removeAttribute("hidden") : "";
    !e.hasAttribute("done") ? e.setAttribute("hidden", "") : "";
  });
}
function showActiveTasks() {
  document.querySelectorAll(".task").forEach((e) => {
    e.hasAttribute("hidden") ? e.removeAttribute("hidden") : "";
    e.hasAttribute("done") ? e.setAttribute("hidden", "") : "";
  });
}
function clearCompleatedTasks() {
  document.querySelectorAll(".task").forEach((e) => {
    if (e.hasAttribute("done")) {
      localStorage.removeItem(getKeyByValue(e.innerText + "🗸"));
      e.remove();
    }
  });
  num.innerText = itemsCount();
}
function switchingThemes() {
  page.toggleAttribute("light");
  page.toggleAttribute("dark");
}
input.onkeydown = (e) => {
  if (e.key === "Enter" && input.value.length !== 0) {
    addTaskToDOM();
    addTaskToLocalStorage();
    toggleDone();
    removeTask();
    num.innerText = itemsCount();
    for (let i in localStorage.length) {
      if (localStorage.getItem('null')) {
        localStorage.removeItem('null')
      }
    }
  }
};
showAll.onclick = () => showAllTasks();
showComp.onclick = () => showCompleatedTasks();
showActive.onclick = () => showActiveTasks();
clearComp.onclick = () => clearCompleatedTasks();
theme.onclick = () => switchingThemes();
num.innerText = itemsCount();
