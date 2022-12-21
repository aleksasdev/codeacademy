import MealModal from "./MealModal.js";

export default class MealElement{
   constructor({mealName, mealThumbnailUrl, outputElement, ...props}){
      this.mealName = mealName;
      this.mealThumbnailUrl = mealThumbnailUrl;
      this.outputElement = outputElement;
   }

   render(){
      // Meal card container
      this.containerElement = document.createElement('div');
      this.containerElement.classList.add('meal-container')
      console.log(this.mealName)
      this.containerElement.addEventListener('click',e=>this.click(e));

      // Title
      this.titleElement = document.createElement('p');
      this.titleElement.classList.add('title');
      this.titleElement.append(document.createTextNode = this.mealName);

      // Thumbnail
      this.thumbnailElement = document.createElement('img');
      this.thumbnailElement.src=this.mealThumbnailUrl;

      // Appending meals to container
      this.containerElement.append(this.titleElement, this.thumbnailElement);

      // Apending container to otuput element
      this.outputElement.append(this.containerElement);
   }

   click(e){
      // When user clicks on meal card, we'll create a modal and
      // fetch more information of the meal, like ingredients,
      // youtube video on how to prepare it, etc
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.mealName}`)
         .then(res=>res.json())
         .then(data=>{
            callModal(data);
         })
      
      // Creating a modal and passing it all the necessary information
      let callModal = (data)=>{
         new MealModal({
            mealName: data.strMeal, 
            mealPreparationInstructions: data.strInstructions,
            mealYoutubeVideo: data.strYoutube
         }).render()
      }
   }
}