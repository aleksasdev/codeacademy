// 5) Sukurti skaičiuotuvą.
// Global variables
const valueCalculatorWidth = "20rem";
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
// and style them
const paragraphDescription = document.createElement("p");
   paragraphDescription.innerText="Type in numbers to start calculating...";
   sectionCalculator.appendChild(paragraphDescription);
const containerScreen = document.createElement('div');
const currentOperation = document.createElement('p');
const containerOperations = document.createElement('div');
const containerCalculateOption = document.createElement('div');
const buttonPlus = document.createElement('div');
const buttonMinus = document.createElement('div');
const buttonMultiply = document.createElement('div');
const buttonDivide = document.createElement('div');
//       Styling screen container
containerScreen.style.width=valueCalculatorWidth;
containerScreen.style.height="2rem";
containerScreen.style.border=valueCalculatorBorderSize+" solid black";
containerScreen.style.borderBottom="none";
containerScreen.style.display="flex";
containerScreen.style.justifyContent="center";
containerScreen.style.alignItems="center";
currentOperation.innerText="+";
//       styling operations container
containerOperations.style.width=valueCalculatorWidth;
containerOperations.style.height="2.5rem";
containerOperations.style.display="flex";
containerOperations.style.justifyContent="space-around";
containerOperations.style.alignItems="center";
containerOperations.style.border=valueCalculatorBorderSize+" solid black";
//       syling calculation choices
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
//       Appending elements to calculator section
sectionCalculator.appendChild(containerScreen);
sectionCalculator.appendChild(containerOperations);
containerOperations.append(buttonPlus,buttonMinus,buttonMultiply,buttonDivide)

// Handle listeners
//       Handle key strokes
let allItemsOnScreen = [];
document.querySelector('html').addEventListener('keydown', (e)=>{
   if(!isNaN(parseInt(e.key))){ // Handle numbers
      let newEntryToScreen = document.createElement('p');
      newEntryToScreen.innerText=e.key;
      containerScreen.appendChild(newEntryToScreen);
      allItemsOnScreen.push(newEntryToScreen);
   }
   // Handle backspace
   if(e.key==="Backspace"&&allItemsOnScreen.length!==0){
      containerScreen.removeChild(allItemsOnScreen.pop());
      allItemsOnScreen.length===0?containerScreen.removeChild(currentOperation):null;
   }
});
//       Handle calculate buttons being clicked on
for(let button of buttonsArray){
   button.addEventListener('click',(e)=>{
      currentOperation.innerText=e.target.innerText;
      containerScreen.appendChild(currentOperation);
   });
}