import { renderError, renderResults } from './renderPage.js';



export function fetchCountryData(url) {
console.log(url);
    return fetch(url);
}

export async function fetchAndRenderCountryData(data) {
    console.log('some data', data);
    try{
        const response = await fetchCountryData(data);
        const jsonData = await response.json();
        console.log('data :', jsonData);
        renderResults(jsonData);
    } catch (error) {
        console.log ('Something went wrong', error);
        renderError(error);
    }
}