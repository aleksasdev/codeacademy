export default class GetListings{
   constructor({outputElement, ...props}){
      this.outputElement = outputElement;
   }

   async render(){
      // Fetch data from the server
      await fetch('https://robust-safe-crafter.glitch.me/', {
         method: "GET"
      })
      .then(res=>res.json())
      .then(data=>this.data=data);

      await console.log(this.data)

      this.data.forEach(object=>{
         // Create a card for the listing
         this.container=document.createElement('div');
         this.container.classList.add('listing-container')

         this.title=document.createElement('p');
         this.title.classList.add('title');
         this.title.append(document.createTextNode(object.city));

         this.thumbnail=document.createElement('img');
         this.thumbnail.src=object.image;

         // Append everything
         this.container.append(this.title, this.thumbnail);
         this.outputElement.append(this.container);
      })

   }
}