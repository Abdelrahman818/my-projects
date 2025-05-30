import { createElement } from "./myModule.js";

export async function getExts() {
  const data = await fetch("data.json");
  const json = data.json();
  return json;
}
export function renderExts(iconPath, head, text, isActive) {
  const card = createElement("div", { class: "ext-card" });
  const extIcon = createElement("img", {
    src: iconPath,
    alt: "noimg",
    class: "ext-icon",
  });
  const infos = createElement("div", {
    class: "infos d-flex flex-clumn align-items-start",
  });
  const textCont = createElement("div", { class: "text ml-4" });
  const header = createElement("h3", [], head);
  const p = createElement("p", [], text);
  const control = createElement("div", {
    class: "controls mt-5 d-flex justify-content-between align-items-center",
  });
  const remBtn = createElement("span", { class: "remove" }, "Remove");
  const selector = createElement("div", {
    class: isActive ? "switch active" : "switch inactive",
  });
  const ball = createElement("span", { class: "ball" });

  selector.append(ball);
  control.append(remBtn);
  control.append(selector);
  textCont.append(header);
  textCont.append(p);
  infos.append(extIcon);
  infos.append(textCont);
  card.append(infos);
  card.append(control);
  return card;
}
export function toggleActive(selector) {
  if (selector.classList.contains("active")) {
    selector.classList.remove("active");
    selector.classList.add("inactive");
  } else {
    selector.classList.remove("inactive");
    selector.classList.add("active");
  }
}
