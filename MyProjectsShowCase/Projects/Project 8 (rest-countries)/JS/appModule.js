import { createElement } from "./myModule.js";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
let data;

function addFilters() {
  let ul = createElement("ul", "none");
  for (let i in regions)
    ul.append(createElement("li", "class", "filter", regions[i]));
  return ul;
}
async function getData() {
  const res = await fetch("data.json");
  data = await res.json();
}
function createCards(flag, name, pop, cap, reg, cont) {
  const card = createElement("div", "class", "country");
  const imgCont = createElement("div", "class", "img-cont");
  const img = createElement("img", "src", flag);
  const detailsCont = createElement("div", "class", "info");
  const countryName = createElement("h3", "class", "name", name);
  const population = createElement("p", "class", "pop", "Population: " + pop);
  const regionDiv = createElement("div", "class", "reg");
  const capital = createElement("p", "class", "cap", "Capital: " + cap);
  const regSpan = createElement("span", "class", "reg", reg);
  const region = createElement("span", "class", "reg-key", "Region: ");
  img.alt = "Can't load this img...";
  imgCont.append(img);
  detailsCont.append(countryName);
  detailsCont.append(population);
  regionDiv.append(region);
  regionDiv.append(regSpan);
  detailsCont.append(regionDiv);
  detailsCont.append(capital);
  card.append(imgCont);
  card.append(detailsCont);
  cont.append(card);
}
async function displayCardsWithData(element) {
  await getData();
  for (let i in data)
    createCards(
      data[i].flag,
      data[i].name,
      data[i].population,
      data[i].capital,
      data[i].region,
      element
    );
  chooseFilters();
  countryFoucus();
}
function countryFoucus() {
  const div = createElement("div", "class", "focus");
  const infos = createElement("div", "class", "infos");
  const imgCont = createElement("div", "class", "fimg-cont");
  const img = createElement("img", "src");
  const allCountries = document.querySelectorAll(".country");
  let name, nName, fimg, pop, reg, subReg, cap, TLD, curr, lang, bCoun;
  allCountries.forEach((e) => {
    e.onclick = () => {
      const main = document.querySelector("main");
      main.setAttribute("hide", "");
      setTimeout(() => {
        main.setAttribute("none", "");
      }, 350);
      name = e.querySelector("h3.name").innerText;
      for (let i in data) {
        if (data[i].name === name) {
          nName = data[i].nativeName;
          fimg = data[i].flag;
          pop = data[i].population;
          reg = data[i].region;
          subReg = data[i].subregion;
          cap = data[i].capital;
          TLD = data[i].topLevelDomain[0];
          curr = [];
          for (let j in data[i].currencies)
            curr.push(data[i].currencies[j].name);
          lang = [];
          for (let j in data[i].languages) lang.push(data[i].languages[j].name);
          bCoun = data[i].borders;
          break;
        }
      }
      div.setAttribute("hide", "");
      document.getElementById("app").append(div);
      setTimeout(() => {
        div.removeAttribute("hide");
      }, 100);
      imgCont.append(img);
      img.src = fimg;
      const countryName = createElement("h2", "", "", name);
      const nativeName = createElement("div", "class", "native");
      const population = createElement("div", "class", "pop");
      const region = createElement("div", "class", "reg");
      const SubRegion = createElement("div", "class", "sub-reg");
      const capital = createElement("div", "class", "cap");
      const topLevelDomain = createElement("div", "class", "TLD");
      const currencies = createElement("div", "class", "curr");
      const languages = createElement("div", "class", "lang");
      const borders = createElement("div", "class", "borders");
      const backBtn = createElement("span", "id", "back", "GO BACK");
      nativeName.append(createElement("span", "class", "key", "Native name: "));
      population.append(createElement("span", "class", "key", "Population: "));
      SubRegion.append(createElement("span", "class", "key", "Sub-Region: "));
      region.append(createElement("span", "class", "key", "Region: "));
      capital.append(createElement("span", "class", "key", "Capital: "));
      topLevelDomain.append(createElement("span", "class", "key", "TLD: "));
      currencies.append(createElement("span", "class", "key", "Currencies: "));
      languages.append(createElement("span", "class", "key", "Languages: "));
      borders.append(
        createElement("span", "class", "key", "Border countries: ")
      );
      nativeName.append(createElement("span", "class", "val", nName));
      population.append(createElement("span", "class", "val", pop));
      SubRegion.append(createElement("span", "class", "val", subReg));
      region.append(createElement("span", "class", "val", reg));
      capital.append(createElement("span", "class", "val", cap));
      topLevelDomain.append(createElement("span", "class", "val", TLD));
      currencies.append(createElement("span", "class", "val", curr.join(", ")));
      languages.append(createElement("span", "class", "val", lang.join(", ")));
      try {
        borders.append(createElement("span", "class", "val", bCoun.join(", ")));
      } catch {
        borders.append(createElement("span", "class", "val", "No borders..."));
      }
      infos.append(countryName);
      infos.append(nativeName);
      infos.append(population);
      infos.append(region);
      infos.append(SubRegion);
      infos.append(capital);
      infos.append(topLevelDomain);
      infos.append(currencies);
      infos.append(languages);
      infos.append(borders);
      div.append(backBtn);
      div.append(imgCont);
      div.append(infos);
      document.getElementById("back").onclick = () => {
        document.querySelector("div.focus").setAttribute("hide", "");
        document.querySelector("div.focus").remove();
        main.removeAttribute("none");
        countryName.remove();
        nativeName.remove();
        population.remove();
        SubRegion.remove();
        region.remove();
        capital.remove();
        topLevelDomain.remove();
        currencies.remove();
        languages.remove();
        borders.remove();
        backBtn.remove();
        setTimeout(() => {
          main.removeAttribute("hide");
        }, 0);
      };
    };
  });
}
function chooseFilters() {
  const li = document.querySelectorAll(".filter-box ul li.filter");
  li.forEach((e) => {
    e.onclick = () => {
      let reg;
      const filterBox = document.querySelector(".filter-box h4");
      const countriesCont = document.querySelector("section.countries");
      const countries = document.querySelectorAll("section.countries .country");
      reg = e.innerText;
      filterBox.innerText = reg;
      if (filterBox.innerText !== "Choose filter")
        countries.forEach((el) => el.remove());
      for (let i in data) {
        if (data[i].region === filterBox.innerHTML)
          createCards(
            data[i].flag,
            data[i].name,
            data[i].population,
            data[i].capital,
            data[i].region,
            countriesCont
          );
      }
      countryFoucus();
      document.getElementById('app').append(clearFilter());
      clickListener()
      filtersReset(document.querySelector("section.countries"))
    };
  });
}
function search(val) {
  const countries = document.querySelectorAll(".countries .country");
  const countryCont = document.querySelector(".countries");
  if (val.length > 0) {
    countries.forEach((e) => e.remove());
    for (let i in data) {
      if (data[i].name.match(new RegExp(val, "i"))) {
        createCards(
          data[i].flag,
          data[i].name,
          data[i].population,
          data[i].capital,
          data[i].region,
          countryCont
        );
      }
    }
  } else {
    countries.forEach((e) => e.remove());
    for (let i in data) {
      createCards(
        data[i].flag,
        data[i].name,
        data[i].population,
        data[i].capital,
        data[i].region,
        countryCont
      );
    }
  }
  chooseFilters();
  countryFoucus();
}
function clearFilter() {
  const cross = createElement("div", "class", "cross position-absolute");
  const fd = createElement("span", "class", "fd");
  const rd = createElement("span", "class", "sd");
  cross.append(fd);
  cross.append(rd);
  return cross;
}
function applyClearingFilter() {
  const cross = document.querySelector(".cross");
  const currFilter = document.querySelector(".filter-box h4");
  const countriesCont = document.querySelector(".countries");
  currFilter.innerHTML = "Choose filter";
  document.querySelectorAll(".country").forEach((e) => e.remove());
  for (let i in data)
    createCards(
      data[i].flag,
      data[i].name,
      data[i].population,
      data[i].capital,
      data[i].region,
      countriesCont
    );
  countryFoucus()
}
function clickListener() {
  const cross = document.querySelector('.cross')
  cross.onclick = () => {
    applyClearingFilter()
    cross.remove()
  }
}
function filtersReset(element) {
  const cross = document.querySelector('.cross')
  const countries = document.querySelectorAll('.country')
  cross.onclick = () => {
    document.querySelector('.filter-box h4').innerHTML = 'Choose filter'
    countries.forEach(
      e => {
        e.remove()
      }
    )
    for (let i in data)
      createCards(
        data[i].flag,
        data[i].name,
        data[i].population,
        data[i].capital,
        data[i].region,
        element
      );
    chooseFilters();
    countryFoucus();
    document.querySelector('.cross').remove()
  }
}

export {
  addFilters,
  getData,
  displayCardsWithData,
  search
};
