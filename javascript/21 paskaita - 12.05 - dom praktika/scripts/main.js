// Handle hide/show buttons being clicked on
for(let hideButton of document.querySelectorAll('.hide-button')){
   hideButton.addEventListener('click', (e)=>{
      let containerToHide = document.querySelector(hideButton.getAttribute('containerToHide'));
      if(hideButton.id==="state-hide"){
         containerToHide.style.display="none";
         hideButton.id="state-show";
         hideButton.innerText="Rodyti";
      }else{
         containerToHide.style.display="unset";
         hideButton.id="state-hide";
         hideButton.innerText="Slėpti";
      }
   });
}