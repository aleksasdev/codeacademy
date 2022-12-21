export default class MealModal{
   constructor(){

   }

   render(){
      // Create overlay
      this.overlayDiv = document.createElement('div');
      this.overlayDiv.style.width="100%";
      this.overlayDiv.style.height="100%";
      this.overlayDiv.style.backgroundColor="black";
      this.overlayDiv.style.position="fixed";
   }
}