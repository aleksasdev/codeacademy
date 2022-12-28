import Fetch from "./Fetch.js";

export default class Listing{
   constructor(props){
      this.props = props;
   }

   render(){
      this.container = document.createElement('div');
      this.container.classList.add('listing-container');

      // Title 
      this.title = document.createElement('h1');
      this.title.classList.add('title');
      this.title.textContent = this.props.title;
      this.title.setAttribute('contenteditable', true);
      this.title.addEventListener('input', e=>this.handleUpdate(e));

      // Cover image
      this.cover = document.createElement('img');
      this.cover.src=this.props.url;

      // Author
      this.author = document.createElement('p');
      this.author.classList.add('author');
      this.author.textContent = this.props.author;
      this.author.setAttribute('contenteditable', true);
      this.author.addEventListener('input', e=>this.handleUpdate(e));

      // Delete button
      this.deleteButton = document.createElement('div');
      this.deleteButton.classList.add('delete');
      this.deleteButton.textContent = "Delete";
      this.deleteButton.addEventListener('click', e=>{new Fetch(this.props.id, null).delete()});
      
      this.container.append(this.title, this.cover, this.author, this.deleteButton);
      return this.container;
   }

   handleUpdate(e){
      if(e.target.classList[0] === "title"){
         this.props.title = e.target.textContent;
      }
      else if(e.target.classList[0] === "author"){
         this.props.author = e.target.textContent;
      }

      new Fetch(this.props.id, this.props).edit();
   }
}