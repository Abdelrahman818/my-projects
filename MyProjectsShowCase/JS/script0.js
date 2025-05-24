// Imports
import { nextSlide, prevSlide, moreToggle } from "./myModule.js";

// Vars
const gear = document.querySelector(".more i")
const nextImgOne = document.querySelector(".next.one");
const nextImgTwo = document.querySelector(".next.two");
const nextImgThree = document.querySelector(".next.three");
const nextImgFour = document.querySelector(".next.four");
const nextImgFive = document.querySelector(".next.five");
const nextImgSix = document.querySelector(".next.six");
const nextImgSeven = document.querySelector(".next.seven");

const prevImgOne = document.querySelector(".prev.one");
const prevImgTwo = document.querySelector(".prev.two");
const prevImgThree = document.querySelector(".prev.three");
const prevImgFour = document.querySelector(".prev.four");
const prevImgFive = document.querySelector(".prev.five");
const prevImgSix = document.querySelector(".prev.six");
const prevImgSeven = document.querySelector(".prev.seven");

let pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0,
  pos5 = 0,
  pos6 = 0,
  pos7 = 0;

// Code
gear.onclick = () => moreToggle();
nextImgOne.onclick = () =>
  nextSlide(pos1, ".img-container.one .handler") ? pos1++ : "";
nextImgTwo.onclick = () =>
  nextSlide(pos2, ".img-container.three .handler") ? pos2++ : "";
nextImgThree.onclick = () =>
  nextSlide(pos3, ".img-container.four .handler") ? pos3++ : "";
nextImgFour.onclick = () =>
  nextSlide(pos4, ".img-container.five .handler") ? pos4++ : "";
nextImgFive.onclick = () =>
  nextSlide(pos5, ".img-container.six .handler") ? pos5++ : "";
nextImgSix.onclick = () =>
  nextSlide(pos6, ".img-container.seven .handler") ? pos6++ : "";
nextImgSeven.onclick = () =>
  nextSlide(pos7, ".img-container.eight .handler") ? pos7++ : "";

prevImgOne.onclick = () =>
  prevSlide(pos1, ".img-container.one .handler") ? pos1-- : "";
prevImgTwo.onclick = () =>
  prevSlide(pos2, ".img-container.three .handler") ? pos2-- : "";
prevImgThree.onclick = () =>
  prevSlide(pos3, ".img-container.four .handler") ? pos3-- : "";
prevImgFour.onclick = () =>
  prevSlide(pos4, ".img-container.five .handler") ? pos4-- : "";
prevImgFive.onclick = () =>
  prevSlide(pos5, ".img-container.six .handler") ? pos5-- : "";
prevImgSix.onclick = () =>
  prevSlide(pos6, ".img-container.seven .handler") ? pos6-- : "";
prevImgSeven.onclick = () =>
  prevSlide(pos7, ".img-container.eight .handler") ? pos7-- : "";
