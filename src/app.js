import { fetchAndRenderCountryData } from './pages/fetchPage.js';
import { COUNTRIES_DATA } from '../src/constants.js';



function main() {
    console.log("Main");
    const button = document.getElementById('start-picker');
    button.classList.add('start-button');
    button.addEventListener('click', function() {
        fetchAndRenderCountryData(COUNTRIES_DATA);
    });
}
  
window.addEventListener('load', main);