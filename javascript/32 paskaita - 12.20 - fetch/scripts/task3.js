
import MealElement from "./MealElement.js";

const OUTPUT_CONTAINER = document.querySelector('#task3 .output-container');

// Call this function when user inputs something into the
// search bar
document.querySelector('#task3 input[type="search"]').addEventListener('input', e=>{
   // Fetch data from api according to user's search
   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e.target.value}`)
      .then(res=>res.json())
      .then(data=>{
         if(data.meals){
            // If data is valid, we'll loop through every meal and
            // add it to the output container
            render({apiData: data.meals})
         }
      })
})

function render({apiData}){
   // First we'll clear out the container
   while(OUTPUT_CONTAINER.firstChild){OUTPUT_CONTAINER.removeChild(OUTPUT_CONTAINER.firstChild)};

   // Now we loop
   apiData.forEach(meal=>{
      new MealElement({
         outputElement: OUTPUT_CONTAINER,
         mealName: meal.strMeal,
         mealThumbnailUrl: meal.strMealThumb
      }).render()
   })
}


// Fetch this when the page loads
// new MealFetcher({
//    url: "pork", 
//    outputElement: document.querySelector("#task3 .output-container")
// }).fetch();
