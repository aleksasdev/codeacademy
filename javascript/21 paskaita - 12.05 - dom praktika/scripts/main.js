// Handle hide/show buttons being clicked on
for(let hideButton of document.querySelectorAll('.hide-button')){
   hideButton.addEventListener('click', (e)=>{
      let elementsToShowOrHide = hideButton.parentElement.querySelectorAll('*>div');
      if(hideButton.id==="state-hide"){
         for(let element of elementsToShowOrHide){element.style.display="none"};
         hideButton.id="state-show";
         hideButton.innerText="Rodyti";
      }else{
         for(let element of elementsToShowOrHide){element.style.display="unset"};
         hideButton.id="state-hide";
         hideButton.innerText="Slėpti";
      }
   });
}