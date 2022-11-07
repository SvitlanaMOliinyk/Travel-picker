import { COUNTRIES_DATA, USER_DIV, } from '../constants.js';


export function createCountryInfo(name, currencyArr , capital, region){
    const userDiv = document.getElementById(USER_DIV);
    const countryTitle = document.createElement('h2');
    countryTitle.classList.add('country-title');
    userDiv.appendChild(countryTitle);
    countryTitle.textContent = name.official;
       
    const ul =  document.createElement('ul');
    userDiv.appendChild(ul);
    
    const li = document.createElement('li');
    ul.appendChild(li);
    
    
    const table = document.createElement('table'); 
    li.appendChild(table);
    
    const tr = document.createElement('tr');
    tr.textContent = `Name: ${name.common}`;
    const tr1 = document.createElement('tr');
    tr1.textContent = `Capital: ${capital}`;
    const tr2 = document.createElement('tr');
    tr2.textContent = `Region: ${region}`;
    const tr3 = document.createElement('tr');
    tr3.textContent = `Currencies: ${currencyArr.join(", ")}`;
    table.appendChild(tr);
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
}
