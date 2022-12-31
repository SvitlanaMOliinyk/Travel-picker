import { USER_DIV } from "../constants.js";
import { showOptions } from "../view/selectView.js";
import { restartButton } from "../view/restartView.js";
import { showPhoto } from "../view/photoView.js";
import { createCountryInfo } from "../view/countryView.js";

export function renderResults(jsonData) {
  emptyElement(USER_DIV);

  const randomNumber = Math.floor(Math.random() * 250);
  const chosenCountry = jsonData[randomNumber];
  const { name, currencies, capital, region } = chosenCountry;

  const currencyArr = [];
  for (const key in currencies) {
    const obj = currencies[key];
    if (obj.name != null) {
      currencyArr.push(obj.name);
    }
  }
  createCountryInfo(name, currencyArr, capital, region);
  showOptions(chosenCountry);
  restartButton();
  showPhoto(name.common);
}

export function renderError(error) {
  if (error) {
    const errorElement = document.createElement("h1");
    errorElement.classList("err");
    errorElement.textContent = error;
  } else {
    errorElement = document.querySelector(".err");
    errorElement.textContent = "";
  }
}

function emptyElement(element) {
  while (element.firstElementChild) {
    element.firstElementChild.remove();
  }
}
