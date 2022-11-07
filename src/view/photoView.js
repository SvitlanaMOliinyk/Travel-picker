// require('dotenv').config()
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()
// import express from 'express'
import { COUNTRIES_DATA, USER_DIV, } from '../constants.js';
import { apiKey } from '../keys.js';
const userDiv = document.getElementById(USER_DIV);



export async function showPhoto(countryName){
    try{
    const photoDiv = document.createElement('div');
    photoDiv.classList.add(".photo-container");
    userDiv.appendChild(photoDiv);

    const query = `https://api.pexels.com/v1/search?query=${countryName}`;

    const photoUrl = await fetch(query,{
      headers: {
        Authorization: apiKey
      }
    })
    // client.photos.search({ query, per_page: 1 });
    // ({ query, per_page: 1 }) ;
    console.log('send photoUrl', photoUrl);
  
    const photoImageData = await photoUrl.json();
    console.log('photoImageData', photoImageData);

    const { photos } = photoImageData;


    for (let i = 0; i < 4; i++) {
      const photoAddress = Object.values(photos)[i];
      const { src } = photoAddress;
      const srcMedium = src.medium;

      let imageElement = document.createElement('img');
      imageElement.alt = (`${photoAddress.id}`);
      imageElement.classList.add('country-photo');
      photoDiv.appendChild(imageElement);
  
      imageElement.src = srcMedium;
    }
  } catch (error) {
    console.log('Photo error', error.message);
  }
}
