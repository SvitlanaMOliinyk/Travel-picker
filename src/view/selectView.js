// import { fetchCountryData } from '../pages/fetchPage.js';
import { COUNTRIES_DATA, USER_DIV, } from '../constants.js';

const userDiv = document.getElementById(USER_DIV);

       
function showMoreData(selectElement) {
  
  const calledOption = selectElement.target.value;

  let showPara = document.querySelector('.option-info');
  if (showPara === null) {
    showPara = document.createElement('p');
    userDiv.appendChild(showPara);
    showPara.classList.add('option-info');
    showPara.textContent = calledOption;  
  } else {
    showPara.textContent = "";  
    showPara.textContent = calledOption;
  }
}
  

  export function showOptions(chosenCountry){
    
    const { population, subregion, timezones, languages, flags, coatOfArms } = chosenCountry;
    const languageString = Object.values(languages).join(", ");
    const timeString = timezones.join(", ");
    
    const extraInfo = { 
      population: population, 
      subregion: subregion, 
      timezones: timeString, 
      languages: languageString,
    }
    
    const selectedElement = document.querySelector('.extra-info');
    if (selectedElement !== null) {
      return;
    }
    const selectElement = document.createElement('select');
    selectElement.classList.add('extra-info');
    userDiv.appendChild(selectElement);
    for (const [key, value] of Object.entries(extraInfo)) {
      const option = document.createElement('option');
      option.label = key;
      if (value) {
        option.value = value;
        selectElement.appendChild(option);
      }
    }
   
    selectElement.addEventListener('change', showMoreData);
   
}
