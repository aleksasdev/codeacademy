import Fetch from "./Fetch.js";
import { LISTINGS_CONTAINER } from "./task1.js";

export default class RenderListings{
   constrcutor(){
   }

   async render(){
      this.data = await new Fetch("", null).get();
      this.data.forEach(listing=>{
         // Card container
         this.container = document.createElement('div');
         this.container.classList.add('listing-container');

         // Title 
         this.title = document.createElement('h1');
         this.title.classList.add('title');
         this.title.textContent = listing.title;
         this.title.setAttribute('contenteditable', true);
         this.title.addEventListener('input', e=>this.handleUpdate(e, listing));

         // Cover image
         this.cover = document.createElement('img');
         this.cover.src=listing.url;

         // Author
         this.author = document.createElement('p');
         this.author.classList.add('author');
         this.author.textContent = listing.author;
         this.author.setAttribute('contenteditable', true);
         this.author.addEventListener('input', e=>this.handleUpdate(e, listing));

         // Delete button
         this.deleteButton = document.createElement('button');
         this.deleteButton.textContent = "Delete";
         this.deleteButton.addEventListener('click', e=>{new Fetch(listing.id, null).delete()});
         
         this.container.append(this.title, this.cover, this.author, this.deleteButton);
         LISTINGS_CONTAINER.append(this.container);
      });
   }

   handleUpdate(e, data){
      if(e.target.classList[0] === "title"){
         data.title = e.target.textContent;
      }
      else if(e.target.classList[0] === "author"){
         data.author = e.target.textContent;
      }


      new Fetch(data.id, data).edit();
   }

   refresh(){
      while(LISTINGS_CONTAINER.firstChild){LISTINGS_CONTAINER.removeChild(LISTINGS_CONTAINER.firstChild)};
      this.render();
   }
}