import Fetch from './Fetch.js';
import Listing from './Listing.js';

// Constants
export const LISTINGS_CONTAINER = document.querySelector("#task1 .output-container");

// Post new listing when submit button is clicked
document.querySelector('#task1 .add-book-container').addEventListener('submit', e=>{
   e.preventDefault()
   new Fetch(null, 
      {
         title: e.target.elements.title.value,
         author: e.target.elements.author.value,
         url: e.target.elements.url.value
      }).post()
});

// Refreshes and renders listings inside of a container
export async function RenderListings(){
   while(LISTINGS_CONTAINER.firstChild){LISTINGS_CONTAINER.removeChild(LISTINGS_CONTAINER.firstChild)}; // Clear out output container first

   const data = await new Fetch("", null).get();
   data.forEach(entry=>{
      LISTINGS_CONTAINER.append(new Listing(entry).render());
   })
}
RenderListings(); // Render listings by default when page loads