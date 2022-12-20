import MealFetcher from "./MealFetcher.js"

document.querySelector('#task3 input[type="search"]').addEventListener('input', e=>{
   new MealFetcher({
      url: e.target.value, 
      outputElement: document.querySelector("#task3 .output-container")
   }).fetch();
})
// Fetch this when the page loads
new MealFetcher({
   url: "pork", 
   outputElement: document.querySelector("#task3 .output-container")
}).fetch();