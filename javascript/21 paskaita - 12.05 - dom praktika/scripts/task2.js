import data from './data.js';
let contentContainer = document.querySelector('#task2 .content-container');

// Stylize section
document.querySelector('#task2').classList.add('stylize-center-content');
document.querySelector('#task2 div').classList.add('stylize-center-content');

// Make all the necessary elements
let headerElement = document.createElement('h1');
headerElement.innerText=data[0].title;
let paragraphElement = document.createElement('p');
paragraphElement.innerText=data[0].paragraph;
let imageElement = document.createElement('img');
imageElement.src=data[0].image;

// Populate section container with created elements
contentContainer.appendChild(headerElement);
contentContainer.appendChild(paragraphElement);
contentContainer.appendChild(imageElement);
