export default class MealFetcher{
   constructor({url, outputElement}){
      this.url = url;
      this.outputElement = outputElement;
   }

   fetch(){
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.url}`)
         .then(res=>res.json())
         .then(data=>{
            this.data = data.meals;
            this.render()
         })
   }

   render(){
      if(this.data){
         this.outputElement.innerHTML="";
         this.data.forEach(meal=>{
            this.outputElement.innerHTML+=
            `
            <div class="meal-container">
               <p class="title">${meal.strMeal}</p>
               <img src="${meal.strMealThumb}">
            </div>
            `
         });
      }
   }
}