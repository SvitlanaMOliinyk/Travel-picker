// const countriesData = 'https://restcountries.com/v3.1/all';

import { COUNTRIES_DATA, USER_DIV, } from '../constants.js';
import { showOptions } from '../view/selectView.js';
// import { fetchAndRenderCountryData } from './fetchPage.js';
import { restartButton }  from '../view/restartView.js';
import { showPhoto }  from '../view/photoView.js';
import { createCountryInfo }  from '../view/countryView.js';


const userDiv = document.getElementById(USER_DIV);

export function renderResults(jsonData) {
    
    emptyElement(userDiv);
   
    const randomNumber = Math.floor(Math.random() * 250);
   

    const chosenCountry = jsonData[randomNumber];
    
const { name, currencies, capital, region } = chosenCountry;

const currencyArr = [];
for(const key in currencies) {
    const obj = currencies[key];
    if(obj.name != null) {
        currencyArr.push(obj.name);
    }
}
createCountryInfo(name, currencyArr , capital, region);

// const countryTitle = document.createElement('h2');
// countryTitle.classList.add('country-title');
// userDiv.appendChild(countryTitle);
// countryTitle.textContent = name.official;
   
// const ul =  document.createElement('ul');
// userDiv.appendChild(ul);

// const li = document.createElement('li');
// ul.appendChild(li);


// const table = document.createElement('table'); 
// li.appendChild(table);

// const tr = document.createElement('tr');
// tr.textContent = `Name: ${name.common}`;
// const tr1 = document.createElement('tr');
// tr1.textContent = `Capital: ${capital}`;
// const tr2 = document.createElement('tr');
// tr2.textContent = `Region: ${region}`;
// const tr3 = document.createElement('tr');
// tr3.textContent = `Currencies: ${currencyArr.join(", ")}`;
// table.appendChild(tr);
// table.appendChild(tr1);
// table.appendChild(tr2);
// table.appendChild(tr3);
            
showOptions(chosenCountry);
restartButton();
showPhoto(name.common);
// call photo view && show images
}
      
export function renderError(error) {
    if(error){
        const errorElement = document.createElement('h1');
        errorElement.classList("err");
        errorElement.textContent = error;
    } else{
        errorElement = document.querySelector('.err');
        errorElement.textContent = '';
    }
}

function emptyElement(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }

  }



