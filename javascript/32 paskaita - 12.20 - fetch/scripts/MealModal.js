export default class MealModal{
   constructor({mealName, mealPreparationInstructions, mealYoutubeVideo, ...props}){
      this.mealName=mealName;
      this.mealPreparationInstructions=mealPreparationInstructions;
      this.mealYoutubeVideo=mealYoutubeVideo;
   }

   render(){
      // Create overlay
      this.overlayDiv = document.createElement('div');
      this.overlayDiv.style.width="100%";
      this.overlayDiv.style.height="100%";
      this.overlayDiv.style.backgroundColor="#000000aa";
      this.overlayDiv.style.position="fixed";
      this.overlayDiv.style.top="0";

      // Append everything to the body
      document.querySelector('body').append(this.overlayDiv);
   }
}