import { createElement } from "./myModule";

let page = document.querySelector(".page");
let input = document.querySelector(".tasks input");
let tasksContainer = document.querySelector(".append");
let num = document.querySelector(".num");
let showAll = document.querySelector(".All");
let showActive = document.querySelector(".Active");
let showComp = document.querySelector(".Completed");
let clearComp = document.querySelector(".Clear-Completed");
let theme = document.querySelector(".l-d-mode");

num.innerHTML = 0;

function createTaskElement(text) {
  let span = document.createElement("span");
  span.setAttribute("class", "task");
  span.innerText = text;
  span.append(document.createElement("span"));
  return span;
}

function addTaskToDOM(text) {
  let taskElement = createTaskElement(text);
  tasksContainer.appendChild(taskElement);
  attachTaskEventListeners(taskElement);
}

function attachTaskEventListeners(taskElement) {
  taskElement.onclick = () => {
    taskElement.toggleAttribute("done");
    countItems();
  };
  taskElement.querySelector("span").onclick = (event) => {
    event.stopPropagation();
    taskElement.remove();
    countItems();
    localStorage.removeItem(getKeyByValue(taskElement.innerText));
  };
}

for (let i = 0; i < localStorage.length; i++) {
  let taskText = localStorage.getItem(`Key ${i + 1}`);
  addTaskToDOM(taskText);
}

function addTask() {
  if (input.value.length === 0) return;
  addTaskToDOM(input.value);
  localStorage.setItem(`Key ${countItems()}`, input.value);
  input.value = "";
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

function toggleDone() {
  let tasks = document.querySelectorAll(".task");
  tasks.forEach((e) => {
    e.onclick = () => {
      e.toggleAttribute("done");
      countItems();
    };
  });
}

function removeItem() {
  let cross = document.querySelectorAll(".task");
  cross.forEach((e) => {
    e.querySelector("span").onclick = () => {
      e.remove();
      countItems();
      localStorage.removeItem(getKeyByValue(e.innerText));
    };
  });
}

function countItems() {
  let number =
    document.querySelectorAll(".task").length -
    document.querySelectorAll(".task[done]").length;
  return (num.innerHTML = number);
}

function showAllTasks() {
  document.querySelectorAll(".task").forEach((e) => {
    if (e.hasAttribute("hidden")) {
      e.removeAttribute("hidden");
    }
  });
}

function showOnlyActive() {
  document.querySelectorAll(".task").forEach((e) => {
    if (e.hasAttribute("hidden")) {
      e.removeAttribute("hidden");
    }
  });

  document.querySelectorAll(".task").forEach((e) => {
    if (e.hasAttribute("done")) {
      e.setAttribute("hidden", "");
    }
  });
}

function showOnlyCompleted() {
  document.querySelectorAll(".task").forEach((e) => {
    if (e.hasAttribute("hidden")) {
      e.removeAttribute("hidden");
    }
  });

  document.querySelectorAll(".task").forEach((e) => {
    if (!e.hasAttribute("done")) {
      e.setAttribute("hidden", "");
    }
  });
}

function removeCompleted() {
  document.querySelectorAll(".task[done]").forEach((e) => {
    e.remove();
  });
}

function switchingThemes() {
  page.toggleAttribute("light");
  page.toggleAttribute("dark");
}

input.onkeydown = (e) => {
  if (e.key === "Enter") {
    addTask();
  }
};

showAll.onclick = () => {
  showAllTasks();
};

showActive.onclick = () => {
  showOnlyActive();
};

showComp.onclick = () => {
  showOnlyCompleted();
};

clearComp.onclick = () => {
  removeCompleted();
};

theme.onclick = () => {
  switchingThemes();
};

countItems();
