import RenderListings from './RenderListings.js';

// Constants
export const LISTINGS_CONTAINER = document.querySelector("#")

// Get and display all the book listings
document.querySelector('#task1 .add-book-container').addEventListener('submit', e=>{
   e.preventDefault()
   console.log(e.target.elements)
   post({
      title: e.target.elements.title.value,
      author: e.target.elements.author.value
   })
});

// Render listings by default when poge loads
new RenderListings(LISTINGS_CONTAINER).render();