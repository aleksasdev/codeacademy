export default class MealElement{
   constructor({mealName, mealThumbnailUrl, outputElement}){
      this.mealName = mealName;
      this.mealThumbnailUrl = mealThumbnailUrl;
      this.outputElement = outputElement;
   }

   render(){
      // Meal card container
      this.containerElement = document.createElement('div');
      this.containerElement.classList.add('meal-container')

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
}