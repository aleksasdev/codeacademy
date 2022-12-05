// Task 1
// Pupulate the container with content
let data = [
   {
      headline: "Jomajo buba zuba",
      paragraph: "Lorem ipsum dolor sit amet."
   },{
      headline: "Jomajo buba zuba5345435435",
      paragraph: "Lorem ipsum dolor sit ame345435345t."
   },{
      headline: "Joma435435",
      paragraph: "Lorem ipsum5t."
   },{
      headline: "Jomajo b35",
      paragraph: "Lorem ipsum dolor sit asdfsdfme345435345t."
   },
]
let contentContainer = document.querySelector('#task1 .content-container');
for(let dataObject of data){
   let headlineElement = document.createElement('h1');
   let paragraphElement = document.createElement('p');
   headlineElement.innerText=dataObject.headline;
   paragraphElement.innerText=dataObject.paragraph;
   contentContainer.appendChild(headlineElement);
   contentContainer.appendChild(paragraphElement);
}
// Handle hide/show button being clicked on
let hideButton = document.querySelector('#task1 .hide-button');
hideButton.addEventListener('click', (e)=>{
   if(hideButton.id==="state-hide"){
      contentContainer.style.display="none";
      hideButton.id="state-show";
      hideButton.innerText="Rodyti";
   }else{
      contentContainer.style.display="unset";
      hideButton.id="state-hide";
      hideButton.innerText="Slėpti";
   }
});