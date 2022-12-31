import { USER_DIV } from "../constants.js";
import { fetchPhotoImages } from "../pages/fetchPage.js";
import { createImages, createNewElement } from "./createElementView.js";

export async function showPhoto(countryName) {
  try {
    const photoDiv = createNewElement("div", USER_DIV, ".photo-container");
    const photoImages = await fetchPhotoImages(countryName);
    createImages(photoDiv, photoImages);
  } catch (error) {
    console.log("Photo error", error.message);
  }
}
