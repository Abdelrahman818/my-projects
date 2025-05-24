import { addFilters, displayCardsWithData, search } from "./appModule.js";
import { toggleIt } from "./myModule.js";

const page = document.getElementById("app");
const filterBox = document.querySelector(".filter-box");
const countries = document.querySelector("section.countries");
const theme = document.querySelector("nav i");
const input = document.querySelector("section.search-and-filter .search input");

filterBox.append(addFilters());
toggleIt(
  document.querySelector(".filter-box"),
  document.querySelector(".filter-box ul"),
  "none"
);
displayCardsWithData(countries);
input.onkeydown = () =>
  search(
    document.querySelector("section.search-and-filter .search input").value
  );

theme.onclick = () => page.toggleAttribute("dark");
