// 5) Sukurti skaičiuotuvą.
// Global variables
const valueCalculatorWidth = "25rem";
const valueCalculatorBorderSize = "3px";
// Body styling
document.querySelector('body').style.margin=0;
document.querySelector('body').style.padding=0;
document.querySelector('body').style.boxSizing="border-box";
// Work with calculator section
const sectionCalculator = document.querySelector('#calculator');
sectionCalculator.style.paddingTop="3rem";
sectionCalculator.style.display="flex";
sectionCalculator.style.alignItems="center";
sectionCalculator.style.flexDirection="column";

// Generate html objects that'll get pushed to the DOM
// and style them later
const paragraphDescription = document.createElement("p");
   paragraphDescription.innerText="Type in numbers to start calculating...";
   sectionCalculator.appendChild(paragraphDescription);
const containerScreen = document.createElement('div');
const currentOperation = document.createElement('p');
const containerOperations = document.createElement('div');
const containerCalculateOption = document.createElement('div');
const containerAnswer = document.createElement('div');
const buttonPlus = document.createElement('div');
const buttonMinus = document.createElement('div');
const buttonMultiply = document.createElement('div');
const buttonDivide = document.createElement('div');
//       Styling screen container
containerScreen.style.width=valueCalculatorWidth;
containerScreen.style.height="3rem";
containerScreen.style.border=valueCalculatorBorderSize+" solid black";
containerScreen.style.borderBottom="none";
containerScreen.style.display="flex";
containerScreen.style.justifyContent="center";
containerScreen.style.alignItems="center";
containerScreen.style.borderTopLeftRadius="15px";
containerScreen.style.borderTopRightRadius="15px";
currentOperation.innerText="+";
//       styling operations container
containerOperations.style.width=valueCalculatorWidth;
containerOperations.style.height="2.5rem";
containerOperations.style.display="flex";
containerOperations.style.justifyContent="space-around";
containerOperations.style.alignItems="center";
containerOperations.style.border=valueCalculatorBorderSize+" solid black";
//       syling calculation buttons
let buttonsArray = [];
buttonPlus.classList.add("calculate-option");buttonPlus.innerText="+";buttonsArray.push(buttonPlus);
buttonMinus.classList.add("calculate-option");buttonMinus.innerText="-";buttonsArray.push(buttonMinus);
buttonMultiply.classList.add("calculate-option");buttonMultiply.innerText="*";buttonsArray.push(buttonMultiply);
buttonDivide.classList.add("calculate-option");buttonDivide.innerText="/";buttonsArray.push(buttonDivide);
for(let button of buttonsArray){ // Add global styling for each button
   button.style.fontSize="2rem";
   button.style.fontWeight="bold";
   button.style.cursor="pointer";
}
//       syling answer container
containerAnswer.style.width=valueCalculatorWidth;
containerAnswer.style.height="3rem";
containerAnswer.style.border = valueCalculatorBorderSize+" solid black";
containerAnswer.style.borderTop="none";
containerAnswer.style.display="flex";
containerAnswer.style.alignItems="center";
containerAnswer.style.justifyContent="center";
let buttonAnswer=document.createElement("p");
buttonAnswer.innerText="Get\nAnswer";
buttonAnswer.style.border="1px solid black";
buttonAnswer.style.borderRadius="5px";
buttonAnswer.style.padding="0.2rem";
buttonAnswer.style.textAlign="center";
buttonAnswer.style.cursor="pointer";
containerAnswer.appendChild(buttonAnswer);
//       Appending elements to calculator section
sectionCalculator.appendChild(containerScreen);
sectionCalculator.appendChild(containerOperations);
sectionCalculator.appendChild(containerAnswer);
containerOperations.append(buttonPlus,buttonMinus,buttonMultiply,buttonDivide)

// -------------------------------------------------------------------------
// Handle listeners
//       Handle key strokes
document.querySelector('html').addEventListener('keydown', (e)=>{
   if(!isNaN(parseInt(e.key))){ // Handle numbers
      if(containerScreen.children.length>=30){return}; // Limit how many numbers there can fit
      // Clear the screen if there's an answer on the screen
      if(containerScreen.firstChild !== null&&containerScreen.firstChild.classList.contains("answer")){
         while(containerScreen.firstChild){containerScreen.removeChild(containerScreen.firstChild)};
      }
      // Add clicked number to the screen container
      let newEntryToScreen = document.createElement('p');
      newEntryToScreen.innerText=e.key;
      newEntryToScreen.style.fontWeight="bold";
      newEntryToScreen.style.fontSize="1.5rem";
      containerScreen.appendChild(newEntryToScreen);
   }
   // Handle backspace
   if(e.key==="Backspace"&&containerScreen.children.length!==0){
      containerScreen.removeChild(containerScreen.lastChild);
      try{
         containerScreen.children.length===0?containerScreen.removeChild(currentOperation):null;
      }catch{};
   }
});
//       Handle calculate buttons being clicked on
for(let button of buttonsArray){
   button.addEventListener('click',(e)=>{
      currentOperation.innerText=e.target.innerText;
      currentOperation.style.fontWeight="bold";
      currentOperation.style.fontSize="2rem";
      containerScreen.appendChild(currentOperation);
   });
}
//       Handle answer button being clicked
buttonAnswer.addEventListener('click', (e)=>{
   // Parse all children of the screen container into a string variable
   // so we can split them into left side and right side
   // and calculate properly
   if(containerScreen.children.length===0){return false};
   let arrayToString;
   for(let element of containerScreen.children){arrayToString+=element.innerText};
   arrayToString=arrayToString.replace('undefined','');
   // Now loop through every value in the string variable
   // and find where the calculation choice resides in,
   // then split that spot into left side numbers, right side numbers
   // and operation variables
   let leftSideNumbers;
   let rightSideNumbers;
   let operation;
   let i=0;
   for(let numberValue of arrayToString){
      // Find the operation which is not a number
      if(!parseInt(numberValue) && numberValue!=="0"){
         operation = arrayToString[i]; // Assign operation to its variable first
         // Then simply split the string into two
         leftSideNumbers = arrayToString.split(operation)[0];
         rightSideNumbers = arrayToString.split(operation)[1];
         break;
      }
      i++;
   }
   // Now get the answer
   let answer;
   if(leftSideNumbers !== undefined && rightSideNumbers !== undefined
      && operation !== undefined)
   {
      console.log(operation);
      leftSideNumbers = parseInt(leftSideNumbers);
      rightSideNumbers = parseInt(rightSideNumbers);
      if(operation==="+"){answer=leftSideNumbers+rightSideNumbers};
      if(operation==="-"){answer=leftSideNumbers-rightSideNumbers};
      if(operation==="/"){answer=leftSideNumbers/rightSideNumbers};
      if(operation==="*"){answer=leftSideNumbers*rightSideNumbers};
   }
   // Display the answer on the screen and console
   if(answer!==undefined){
      console.log(answer);
      // Delete everything off the calculator screen
      console.log(containerScreen.children);
      while(containerScreen.firstChild){containerScreen.removeChild(containerScreen.firstChild)};
      // Add the answer to the screen
      let answerElement = document.createElement("p");
      answerElement.classList+="answer";
      answerElement.innerText="["+answer+"]";
      answerElement.style.fontWeight="bold";
      answerElement.style.fontSize="1.6rem";
      containerScreen.appendChild(answerElement);
   };
});