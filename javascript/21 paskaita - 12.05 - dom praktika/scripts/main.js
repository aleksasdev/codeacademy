// Handle hide/show buttons being clicked on
for(let hideButton of document.querySelectorAll('.hide-button')){
   hideButton.addEventListener('click', (e)=>{
      // Get all divs inside the parent element of where our
      // hide button resides in and then hide all of those divs
      let elementsToShowOrHide = hideButton.parentElement.querySelectorAll('*>div');
      if(hideButton.id==="state-hide"){
         for(let element of elementsToShowOrHide){element.classList.toggle('hide-content')};
         hideButton.id="state-show";
         hideButton.innerText="Rodyti";
      }else{
         for(let element of elementsToShowOrHide){element.classList.toggle('hide-content')};
         hideButton.id="state-hide";
         hideButton.innerText="Slėpti";
      }
   });
}