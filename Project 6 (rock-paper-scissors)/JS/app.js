// Imports
import {
  listnToClosingEvent,
  createRulesWindow,
  takeAction,
  myDecision,
  gameLogic,
  scoring,
  playAgainBtn,
  addLightBackgroundToWinner,
} from "../JS/appModule.js";

// Vars
let rulesBtn = document.querySelector("div.rules");
let all = document.querySelectorAll("div.parent");
let myChoice;
let myScore = 0;
let pcScore = 0;

// Code
let circles = addLightBackgroundToWinner();
rulesBtn.onclick = () => {
  createRulesWindow();
  listnToClosingEvent();
};
all.forEach((e) => {
  e.onclick = () => {
    if (!e.hasAttribute("choosed")) {
      if (e.classList.contains("parent-scissors")) myChoice = "s";
      if (e.classList.contains("parent-paper")) myChoice = "p";
      if (e.classList.contains("parent-rock")) myChoice = "r";
      all.forEach((el) => el.setAttribute("remove", ""));
      e.removeAttribute("remove", "");
      e.setAttribute("choosed", "");
      let randChoices = takeAction();
      myDecision(randChoices);
      let result = gameLogic(myChoice, randChoices);
      if (result === "win") {
        myScore++;
        scoring(myScore, pcScore);
        e.setAttribute("win", "");
        document.querySelector("div.pc").setAttribute("lose", "");
      } else if (result === "lose") {
        pcScore++;
        scoring(myScore, pcScore);
        e.setAttribute("lose", "");
        document.querySelector("div.pc").setAttribute("win", "");
      }
      playAgainBtn(result);
      document.querySelector("[win]")
        ? document.querySelector("[win]").append(circles)
        : "";
      let playAgain = document.querySelector("span.play-again-btn");
      if (document.querySelector("[win]>div.cont")) {
        document.querySelector("[win]>div.cont").setAttribute("hide", "");
        setTimeout(() => {
          document.querySelector("[win]>div.cont").removeAttribute("hide");
        }, 500);
      }
      playAgain.onclick = () => {
        document.querySelector("div.pc").setAttribute("hide", "");
        document.querySelector(".play-again-cont").setAttribute("hide", "");
        document.querySelector("[win]>div.cont")
          ? document.querySelector("[win]>div.cont").setAttribute("hide", "")
          : "";
        setTimeout(() => {
          document.querySelector("[win]>div.cont")
            ? document.querySelector("[win]>div.cont").remove()
            : "";
        }, 500);
        setTimeout(() => {
          document.querySelectorAll("section > div").forEach((el) => {
            if (el.hasAttribute("hide")) el.removeAttribute("hide");
            else if (el.hasAttribute("remove")) el.removeAttribute("remove");
            else if (el.hasAttribute("choosed")) el.removeAttribute("choosed");
          });
          document.querySelector("div.pc").remove();
          document.querySelector(".play-again-cont").remove();
          document.querySelector("p.user").remove();
          if (e.hasAttribute("win")) {
            e.removeAttribute("win");
          } else {
            e.removeAttribute("lose");
          }
          const pcElement = document.querySelector("div.pc");
          if (pcElement) {
            if (pcElement.hasAttribute("win")) {
              pcElement.removeAttribute("win");
            } else {
              pcElement.removeAttribute("lose");
            }
          }
        }, 700);
      };
    }
  };
});
