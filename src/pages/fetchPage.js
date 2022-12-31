import { renderError, renderResults } from "./renderPage.js";
import { PHOTO_DATA } from "../constants.js";
import { apiKey } from "../keys.js";

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

export async function fetchPhotoImages(countryName) {
  const query = `${PHOTO_DATA}search?query=${countryName}`;
  const photoUrl = await fetch(query, {
    headers: {
      Authorization: apiKey,
    },
  });
  const photoImageData = await photoUrl.json();
  return photoImageData;
}
