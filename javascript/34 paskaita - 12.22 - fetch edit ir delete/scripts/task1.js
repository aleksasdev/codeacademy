import Fetch from './Fetch.js';
import RenderListings from './RenderListings.js';

// Constants
export const LISTINGS_CONTAINER = document.querySelector("#task1 .output-container");

// Get and display all the book listings
document.querySelector('#task1 .add-book-container').addEventListener('submit', e=>{
   e.preventDefault()
   console.log(e.target.elements)
   new Fetch(null, 
      {
         title: e.target.elements.title.value,
         author: e.target.elements.author.value,
         url: e.target.elements.url.value
      }).post()
});

// Render listings by default when poge loads
new RenderListings().render();