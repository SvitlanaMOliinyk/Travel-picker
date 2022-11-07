import { COUNTRIES_DATA, USER_DIV, } from '../constants.js';
import { fetchAndRenderCountryData } from '../pages/fetchPage.js';

const userDiv = document.getElementById(USER_DIV);

export const restartButton = () => {
    const hiddenButton = document.createElement('button');
    hiddenButton.textContent = `Restart`;
    hiddenButton.type = 'button';
   userDiv.appendChild(hiddenButton);
    hiddenButton.classList.add('hidden-button');

    hiddenButton.addEventListener('click', function() {
    hiddenButton.remove();
    fetchAndRenderCountryData(COUNTRIES_DATA);     
    });
  }


    
