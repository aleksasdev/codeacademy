import data from './data.js';

// Handle section
const sectionContainer = document.querySelector('#task3');
sectionContainer.classList.add('stylize-center-content');

// Handle content container
const contentContainer = document.querySelector('#task3 .content-container');
contentContainer.classList.add('stylize-flex');
const contentHeadline = document.createElement('h1');
contentHeadline.innerText=data[1].title;
contentContainer.appendChild(contentHeadline);
// Add images to the content container
for(let image of data[1].images){
   const contentImage = document.createElement('img');
   contentImage.src=image;
   contentContainer.appendChild(contentImage);
}
