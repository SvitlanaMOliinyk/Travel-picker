import { COUNTRIES_DATA, USER_DIV } from "../constants.js";
import { fetchAndRenderCountryData } from "../pages/fetchPage.js";
import { createNewElement } from "./createElementView.js";

export const restartButton = () => {
  const hiddenButton = createNewElement("button", USER_DIV, "hidden-button");
  hiddenButton.textContent = `Restart`;
  hiddenButton.type = "button";

  hiddenButton.addEventListener("click", function () {
    hiddenButton.remove();
    fetchAndRenderCountryData(COUNTRIES_DATA);
  });
};
