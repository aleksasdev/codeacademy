import data from './data.js';

let contentContainer = document.querySelector('#task4 .content-container');
contentContainer.classList.add('stylize-grid');

// Quickly add title to the content container
let containertitle = document.createElement('h1');
containertitle.innerText=data[2].title;
contentContainer.appendChild(containertitle);
// Make all the necessary elements
let index = 0;
for(let image of data[2].images){
   
   let cardContainer = document.createElement('div');
   let cardHeadline = document.createElement('h4');
   console.log(data[2].imagesTitles);
   cardHeadline.innerText=data[2].imagesTitles[index];
   let cardImage = document.createElement('img');
   cardImage.src=image;
   let cardDescription = document.createElement('p');
   cardDescription.innerText=data[2].paragraphs[index];

   cardContainer.appendChild(cardHeadline);
   cardContainer.appendChild(cardImage);
   cardContainer.appendChild(cardDescription);
   cardContainer.classList.add('stylize-center-content')
   contentContainer.appendChild(cardContainer);
   index++;
}