import * as mod from "./appModule.js";

const page = document.getElementById("root");
const extsCont = document.querySelector(".exts-cont");
const filters = document.querySelectorAll(".filter span");
const theme = document.querySelector(".switch-theme");
const exts = await mod.getExts();

exts.map((ext) => {
  const extCard = mod.renderExts(
    ext.logo,
    ext.name,
    ext.description,
    ext.isActive
  );
  extsCont.append(extCard);
});
document.querySelectorAll(".switch").forEach((el) => {
  el.onclick = () => mod.toggleActive(el);
});
document.querySelectorAll(".ext-card").forEach((el) => {
  el.querySelector(".remove").onclick = () => el.remove();
});
filters.forEach((el) => {
  const cards = document.querySelectorAll(".ext-card");
  el.onclick = () => {
    filters.forEach((e) => {
      e.classList.remove("selected");
    });
    el.classList.add("selected");
    cards.forEach((e) => {
      e.setAttribute("hidden", "");
    });
    if (el === filters[1]) {
      cards.forEach((e) => {
        if (e.querySelector(".controls .switch.active"))
          e.removeAttribute("hidden");
      });
    } else if (el === filters[2]) {
      cards.forEach((e) => {
        if (e.querySelector(".controls .switch.inactive"))
          e.removeAttribute("hidden");
      });
    } else {
      cards.forEach((e) => {
        e.removeAttribute("hidden");
      });
    }
  };
});
theme.onclick = () => {
  if (page.classList.contains("light")) {
    page.classList.remove("light");
    page.classList.add("dark");
  } else {
    page.classList.remove("dark");
    page.classList.add("light");
  }
};
