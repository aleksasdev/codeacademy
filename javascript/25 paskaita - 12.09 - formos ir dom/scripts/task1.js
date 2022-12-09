const debuggingMode=true;

// Make card container invisible if there's no content
const cardContainer = document.querySelector('#generated-cards');
if(cardContainer.children.length===1&&!debuggingMode){
   cardContainer.children[0].style.display="none";
   cardContainer.style.display="none";
}

// Add cards on form submit
document.querySelector('#card > form').addEventListener('submit',e=>{
   e.preventDefault();
   const [title, description, date, location, photo] = e.target.elements;

   // Check if picture has been uploaded and alert 
   // the user if they haven't uploaded a picture
   if(!photo.value&&!debuggingMode){alert("Please upload a picture");return false};

   // Generate the actual card and 
   // add it to the generated cards container
   cardContainer.style.display="grid";
   cardContainer.innerHTML+=
   `
   <div class="generated-card-container">
      <div class="image-container">
         <img src="${debuggingMode&&!photo.value?"./assets/card-default.jpg"
         :URL.createObjectURL(photo.files[0])}" alt="">
         <span>
            <p class="date">${date?date.value:null}</p>
            <p class="location">${location?location.value:null}</p>
         </span>
      </div>
      <div class="content-container">
         <h2 class="title">${title.value}</h2>
         <p class="description">${description.value}</p>
   </div>
   `;

   // Turn the choosen file into usable data
   if(photo.value){
      var fileReader = new fileReader();
      fileReader.onload = function(event){
         document.querySelector();
      }
   }
   
});