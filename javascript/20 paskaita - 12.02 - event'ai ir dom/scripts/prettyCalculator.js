// Populate calculator buttons container with number elements
let buttonsContainer = document.querySelector("#pretty-calculator .buttons-container")
for(let i = 1; i < 10; i++){
   let newElementToAppend=document.createElement('button');
   newElementToAppend.innerText=i;
   buttonsContainer.appendChild(newElementToAppend)
}

// Handle keyboard
document.querySelector('html').addEventListener('keydown', (e)=>{
   let screenContainerElement = document.querySelector('#pretty-calculator .screen-container');
   // Handle operations being typed
   if(e.key === "+" || e.key === "-" ||
      e.key === "*" || e.key === "/"){
      if(!parseInt(screenContainerElement.innerText.slice(-1))){
         screenContainerElement.innerText=screenContainerElement.innerText.substring(0, screenContainerElement.innerText.length-1);
         screenContainerElement.innerText+=e.key;
      }else{
         screenContainerElement.innerText+=e.key;
      }
   }
   // Handle backspace
   if(e.key==="Backspace"){screenContainerElement.innerText=screenContainerElement.innerText.substring(0, screenContainerElement.innerText.length-1);}
   // Handle numbers being typed
   if(parseInt(e.key)){screenContainerElement.innerText+=e.key;}
});

// Handle mouse clicks
for(let button of document.querySelectorAll("#pretty-calculator button")){
   button.addEventListener('click',(e)=>{
      let screenContainerElement = document.querySelector('#pretty-calculator .screen-container');
      // If operation is answer then we return as to not add anything to the screen
      if(button.className==='answer-button'){handleAnswer();return false;};
      // Handle operations
      if(!parseInt(screenContainerElement.innerText.slice(-1))){
         screenContainerElement.innerText=screenContainerElement.innerText.substring(0, screenContainerElement.innerText.length-1);
         screenContainerElement.innerText+=button.innerText;
      }else{
         screenContainerElement.innerText+=button.innerText;
      }
   });
}

// Handle answer
function handleAnswer(){
   console.log("a");
}