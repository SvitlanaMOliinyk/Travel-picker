import { USER_DIV, PHOTO_DATA } from "../constants.js";
import { apiKey } from "../keys.js";
const userDiv = document.getElementById(USER_DIV);

export async function showPhoto(countryName) {
  try {
    const photoDiv = document.createElement("div");
    photoDiv.classList.add(".photo-container");
    userDiv.appendChild(photoDiv);

    const query = `${PHOTO_DATA}search?query=${countryName}`;

    const photoUrl = await fetch(query, {
      headers: {
        Authorization: apiKey,
      },
    });

    const photoImageData = await photoUrl.json();
    const { photos } = photoImageData;

    for (let i = 0; i < 4; i++) {
      const photoAddress = Object.values(photos)[i];
      const { src } = photoAddress;
      const srcMedium = src.medium;

      let imageElement = document.createElement("img");
      imageElement.alt = `${photoAddress.id}`;
      imageElement.classList.add("country-photo");
      photoDiv.appendChild(imageElement);

      imageElement.src = srcMedium;
    }
  } catch (error) {
    console.log("Photo error", error.message);
  }
}
