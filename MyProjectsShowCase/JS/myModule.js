function createElement(element, attr, val = "", innerText = "") {
  let el = document.createElement(element);
  attr ? el.setAttribute(attr, val) : "";
  innerText ? (el.innerHTML = innerText) : "";
  return el;
}
function toContent() {
  document.querySelector(".start-msg span").setAttribute("go-right", "");
  document.querySelector("main").removeAttribute("none");
  document.querySelector("footer").removeAttribute("none");
  setTimeout(() => {
    document
      .querySelectorAll("[hide]")
      .forEach((e) => e.removeAttribute("hide"));
    document.querySelector(".page").removeAttribute("to-up");
    document.querySelector(".start-msg").remove();
  }, 1200);
}
function nextSlide(pos, el) {
  let numOfImgs = document.querySelectorAll(el + " img").length;
  if (pos < numOfImgs - 1) {
    pos++;
    document.querySelector(el).style.transform = `translateX(calc(-${
      pos * 100
    }% - ${pos * 10}px))`;
    return true;
  }
  return false;
}
function prevSlide(pos, el) {
  if (pos > 0) {
    pos--;
    document.querySelector(el).style.transform = `translateX(calc(-${
      pos * 100
    }% - ${pos * 10}px))`;
    return true;
  }
  return false;
}
function moreToggle() {
  document.querySelector(".more").toggleAttribute("clicked");
  document.querySelector(".more-options").toggleAttribute("droped");
}

export { createElement, toContent, nextSlide, prevSlide, moreToggle }
