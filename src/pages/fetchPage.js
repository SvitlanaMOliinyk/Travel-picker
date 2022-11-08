import { renderError, renderResults } from "./renderPage.js";

export function fetchCountryData(url) {
  return fetch(url);
}

export async function fetchAndRenderCountryData(data) {
  try {
    const response = await fetchCountryData(data);
    const jsonData = await response.json();
    renderResults(jsonData);
  } catch (error) {
    console.log("Something went wrong", error);
    renderError(error);
  }
}
