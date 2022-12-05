import data from './data.js';

let contentContainer = document.querySelector('#task4 .content-container');
contentContainer.classList.add('stylize-grid');

// Quickly add title to the content container
let containertitle = document.createElement('h1');
containertitle.innerText=data[2].mainTitle;
contentContainer.appendChild(containertitle);
// Make all the necessary elements
let index = 0;
for(let object of data[2].content){
   
   let cardContainer = document.createElement('div');
   let cardHeadline = document.createElement('h4');
   cardHeadline.innerText=data[2].content[index].title;
   let cardImage = document.createElement('img');
   cardImage.src=object.image;
   let cardDescription = document.createElement('p');
   cardDescription.innerText=data[2].content[index].paragraph;

   cardContainer.appendChild(cardHeadline);
   cardContainer.appendChild(cardImage);
   cardContainer.appendChild(cardDescription);
   cardContainer.classList.add('stylize-center-content')
   contentContainer.appendChild(cardContainer);
   index++;
}