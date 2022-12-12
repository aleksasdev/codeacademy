import { data } from './data.js';


const moviesContainer = document.querySelector('#movies .movies-container');
const filterElement = document.querySelector('#movies form select');
const searchElement = document.querySelector('#movies form input[type="search"]');

function generateMovies(){
   const filteredData = data.movies;

   // Deal with filter
   const filterOption = filterElement.options[filterElement.selectedIndex].text;
   if(filterOption.toLowerCase().includes("highest rating")){
      filteredData.sort((a, b) => a.IMDB - b.IMDB);
   }
   console.log(filteredData);


   filteredData.forEach(element=>{
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      moviesContainer.innerHTML+=
      `
      <div class="movie-card">
         <img src="${element.paveiksliukas}" alt="">
         <div class="description-container">
            <h3 class="title">${element.pavadinimas}</h3>
            <p class="length">${element.trukme} mins</p>
            <p class="rating">IMDB: ${element.IMDB}</p>
         </div>
      </div>
      `;
   });
}
generateMovies();

// Add on change listeners to filter and search
filterElement.addEventListener('change', e=>{generateMovies()});
searchElement.addEventListener('input', e=>{generateMovies()});
