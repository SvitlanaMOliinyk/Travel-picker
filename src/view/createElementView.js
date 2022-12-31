export function createNewElement(type, parentElement, attribute) {
  const newElement = document.createElement(type);
  newElement.classList.add(attribute);
  parentElement.appendChild(newElement);
  return newElement;
}

export function createTable(table, textContentArr) {
  for (let i = 0; i < 4; i++) {
    const tr = document.createElement("tr");
    tr.textContent = textContentArr[i];
    table.appendChild(tr);
  }
}

export function createImages(photoDiv, photoImages) {
  const { photos } = photoImages;
  console.log(photos);
  for (let i = 0; i < 4; i++) {
    const photoAddress = Object.values(photos)[i];
    const { src } = photoAddress;
    const srcMedium = src.medium;

    let imageElement = document.createElement("img");
    imageElement.alt = `${photoAddress.alt}`;
    imageElement.classList.add("country-photo");
    photoDiv.appendChild(imageElement);
    imageElement.src = srcMedium;
  }
}
