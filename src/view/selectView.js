// import { fetchCountryData } from '../pages/fetchPage.js';
import { USER_DIV } from "../constants.js";
import { createNewElement } from "./createElementView.js";

function showMoreData(selectElement) {
  const calledOption = selectElement.target.value;

  let showPara = document.querySelector(".option-info");
  if (showPara === null) {
    showPara = createNewElement("p", USER_DIV, "option-info");
    showPara.textContent = calledOption;
  } else {
    showPara.textContent = "";
    showPara.textContent = calledOption;
  }
}

export function showOptions(chosenCountry) {
  const { population, subregion, timezones, languages } = chosenCountry;
  const languageString = Object.values(languages).join(", ");
  const timeString = timezones.join(", ");

  const extraInfo = {
    population: population,
    subregion: subregion,
    timezones: timeString,
    languages: languageString,
  };

  const selectedElement = document.querySelector(".extra-info");
  if (selectedElement !== null) {
    return;
  }
  const selectElement = createNewElement("select", USER_DIV, "extra-info");
  for (const [key, value] of Object.entries(extraInfo)) {
    const option = document.createElement("option");
    option.label = key;
    if (value) {
      option.value = value;
      selectElement.appendChild(option);
    }
  }

  selectElement.addEventListener("change", showMoreData);
}
