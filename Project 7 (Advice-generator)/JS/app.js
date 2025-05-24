import { createElement } from "./myModule.js";

let generator = document.querySelector("span.advice-gen");
let adv = document.querySelector("p.advice");
let advNum = document.querySelector("span.advice-number");

async function generate() {
  let id;
  let advice;
  let div = createElement("div", "class", "loading");
  let span = createElement("span", "class", "spinner");
  div.append(span);
  document.body.append(div);

  try {
    await fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((json) => json.slip)
      .then((data) => {
        id = data.id;
        advice = `"${data.advice}"`;
      })
      .then(() => {
        document.querySelector("div.loading").remove();
      })
      .catch(() => {
        document.querySelector("div.loading").remove();
        id = "---";
        advice = "Internet error";
      });
  } catch {
    document.querySelector("div.loading").remove();
    id = "---";
    advice = "Internet error";
  }
  advNum.innerText = id;
  adv.innerText = advice;
}

generator.onclick = () => generate();
