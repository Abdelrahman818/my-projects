
let moreContainer = document.querySelector("header div.more")
let more = document.querySelector("header div.more i")
let moreList = document.querySelector("header div.more span")
let cards = document.querySelectorAll(".card")

moreContainer.onclick = () => {
    moreContainer.toggleAttribute("clicked")
};

cards.forEach(e => {
    e.onclick = () => {
        e.toggleAttribute("clicked")
    }
})
