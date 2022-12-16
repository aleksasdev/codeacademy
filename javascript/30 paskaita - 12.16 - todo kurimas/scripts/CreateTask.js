export default class CreateTask{
   constructor(props){
      this.props = props;
      this.render();
   }
   render(){
      // Create task item container and add necessary classes
      this.div = document.createElement('div');
      this.div.classList.add('task-container');
      this.div.classList.add('shadow');

      // Add text
      this.#createText({elementIdentifier: this.div});

      // Add utility buttons
      this.#createUtility({elementIdentifier: this.div});

      // Finally add task item to todo section
      this.props.outputContainer.append(this.div);
   }
   #createText(props){
      // Create content container
      this.contentContainer = document.createElement('div');
      this.contentContainer.classList.add('content-container');

      // Create text element
      this.h1 = document.createElement('h1');
      this.h1.innerText=this.props.taskText;

      // Generate complete task button
      this.completeButton = document.createElement('svg');
      this.completeButton.innerHTML=`<?xml version="1.0" ?><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g><path d="M58.3945,32.1563,42.9961,50.625l-5.3906-6.4629a5.995,5.995,0,1,0-9.211,7.6758l9.9961,12a5.9914,5.9914,0,0,0,9.211.0059l20.0039-24a5.9988,5.9988,0,1,0-9.211-7.6875Z"/><path d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,84A36,36,0,1,1,84,48,36.0393,36.0393,0,0,1,48,84Z"/></g></svg>`;
      this.contentContainer.append(this.completeButton);

      // Handle complete button listener
      this.completeButton.addEventListener('click', e=>{
         // Text
         if(this.h1.style.textDecorationLine==="line-through"){this.h1.style.textDecorationLine="none"}
         else if(!this.h1.style.textDecorationLine || this.h1.style.textDecorationLine==="none"){
            this.h1.style.textDecorationLine="line-through"
         };
      });

      // Append text element to content container
      this.contentContainer.append(this.h1);

      // Append content container to main div
      this.div.append(this.contentContainer);
   }
   #createUtility(props){
      // Generate edit and delete buttons
      this.utilityContainer = document.createElement('div');
      this.utilityContainer.classList.add('utility-container');

      this.editButton = document.createElement('svg');
      this.editButton.innerHTML=`<?xml version="1.0" ?><svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>`

      this.deleteButton = document.createElement('svg');
      this.deleteButton.innerHTML=`<?xml version="1.0" ?><svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-24h-24v24zm26-30h-7l-2-2h-10l-2 2h-7v4h28v-4z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>`

      this.utilityContainer.append(this.editButton,this.deleteButton);
      this.div.append(this.utilityContainer);

      // Handle listeners
      this.handleEdit=(e)=>{
         this.newText = prompt('New task...');
         if(this.newText) this.h1.innerText=this.newText;
      }
      this.handleDelete=(e)=>{
         this.props.outputContainer.removeChild(props.elementIdentifier);
      }
      this.editButton.addEventListener('click',e=>this.handleEdit(e))
      this.deleteButton.addEventListener('click',e=>this.handleDelete(e))
   }
}