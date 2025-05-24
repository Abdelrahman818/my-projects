let keysArr = [
  "7",
  "8",
  "9",
  "Del",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "x",
  "RESET",
  "=",
];

let keyPad = document.querySelector(".key-pad .keys");
let allKeys = document.querySelector("div.keys span");
let screen = document.querySelector("div.result");
let switchThemes = document.querySelector("div.control .themes");
let page = document.querySelector(".page");
let backToHome = document.querySelector("span.go-home");
let theme = 1;
let result;
let re = /[0-9]*\.[0-9]*[^0]/g;
let re2 = /[0-9]{1,3}(?:[\/x\+\-\.][0-9]{1,3})*/g;

for (i in keysArr) {
  let span = document.createElement("span");
  if (keysArr[i] === "Del") span.setAttribute("class", "del");
  else if (keysArr[i] === "RESET") span.setAttribute("class", "reset");
  else if (keysArr[i] === "=") span.setAttribute("class", "enter");
  else span.setAttribute("class", "key");
  span.innerHTML = keysArr[i];
  keyPad.append(span);
}

let keys = document.querySelectorAll("div.keys .key");
let clearAll = document.querySelector(".reset");
let enter = document.querySelector(".enter");
let del = document.querySelector(".del");

clearAll.onclick = () => (screen.innerHTML = "");

function addingComma() {
  if (screen.innerHTML !== "+" || "-" || "/" || "x" || ".") {
    screen.innerHTML = screen.innerHTML.split(",").join("");
    screen.innerHTML = screen.innerHTML
      .split("")
      .reverse()
      .join("")
      .match(re2)
      .join(",")
      .split("")
      .reverse()
      .join("");
  }
}

keys.forEach((e) => {
  e.onclick = () => {
    screen.append(e.innerHTML);
    addingComma();
    if (e.innerHTML === "+") screen.innerHTML += "+";
    else if (e.innerHTML === "-") screen.innerHTML += "-";
    else if (e.innerHTML === "/") screen.innerHTML += "/";
    else if (e.innerHTML === "x") screen.innerHTML += "x";
    else if (e.innerHTML === ".") screen.innerHTML += ".";
  };
});

del.onclick = () => (screen.innerHTML = screen.innerHTML.slice(0, -1));
enter.onclick = () => {
  screen.innerHTML = screen.innerHTML.split(",").join("");
  let op = screen.innerHTML;
  if (op.includes("x")) op = op.split("x").join("*");
  if (!Number.isInteger(eval(op))) {
    screen.innerHTML = eval(op).toFixed(10);
    screen.innerHTML = screen.innerHTML.match(re);
  }
  else
    screen.innerHTML = eval(op);
  if (Number.isInteger(eval(op)))
    addingComma();
};

switchThemes.onclick = () => {
  if (theme < 3) theme++;
  else theme = 1;
  switching();
};

function switching() {
  switch (theme) {
    case 1:
      if (page.hasAttribute("three")) page.removeAttribute("three");
      page.setAttribute("one", "");
      break;
    case 2:
      if (page.hasAttribute("one")) page.removeAttribute("one");
      page.setAttribute("two", "");
      break;
    case 3:
      if (page.hasAttribute("two")) page.removeAttribute("two");
      page.setAttribute("three", "");
      break;
  }
}
