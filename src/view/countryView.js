import { USER_DIV } from "../constants.js";
import { createTable, createNewElement } from "./createElementView.js";

export function createCountryInfo(name, currencyArr, capital, region) {
  const countryTitle = createNewElement("h2", USER_DIV, "country-title");
  countryTitle.textContent = name.official;

  const ul = document.createElement("ul");
  USER_DIV.appendChild(ul);

  const li = document.createElement("li");
  ul.appendChild(li);

  const table = document.createElement("table");
  li.appendChild(table);

  const textContentArr = [
    `Name: ${name.common}`,
    `Capital: ${capital}`,
    `Region: ${region}`,
    `Currencies: ${currencyArr.join(", ")}`,
  ];
  createTable(table, textContentArr);
}
