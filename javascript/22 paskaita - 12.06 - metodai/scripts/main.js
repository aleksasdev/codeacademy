console.groupCollapsed("Math");
let word = "adasdsadasaf"
let number = 50.426234324;
console.log("toFixed()",number.toFixed(2));
console.log(word.slice(-1));
console.groupEnd();

// Task 1 global variables and functions
const outputContainer = document.querySelector('.output-aside .output-container');
function clearOutputContainer(){
   while(outputContainer.firstChild){outputContainer.removeChild(outputContainer.firstChild)};
}
// Task 1
// 1) Sukurk variable 'milkPrice'. 
// Su JS patikrink ir informuok vartotoją console() 
// ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).
console.group("Task1");
let milkPrice = 3.1144;
milkPrice%1!==0?console.log("You'll need cents, since the price is",milkPrice.toFixed(2))
:console.log("You won't need any cents, the price is a whole number:",milkPrice);
// ^
// 2) Pakoreguok pirmą pratimą, kad console taip pat 
// ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).

// 3
document.querySelector("#task1 form").addEventListener('submit',(e)=>{
   e.preventDefault();
   clearOutputContainer();
   const price = parseFloat(document.querySelector('#task1 form .price').value).toFixed(2);
   
   // Output the parsed name into the output container
   const priceElement = document.createElement('h1');
   priceElement.innerText=price+" eur";
   outputContainer.appendChild(priceElement);
});
console.groupEnd();

// Task 2
//  1) Sukurk du input'us - vieną, kur vartotojas įves savo vardą; 
// kitą - skaičių. Pirma, patikrink ar skaičius sveikas 
// (jei ne - console). Jei sveikas, po apačia sukurk h1 elementą, 
// kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.
document.querySelector("#task2 .repeat-name-form").addEventListener('submit',(e)=>{
   e.preventDefault();
   clearOutputContainer();
   const name = document.querySelector('#task2 form .name').value;
   const amountRepeatTimes = document.querySelector('#task2 form .repeat-n-times').value;
   // Check if repeat amount of times is a whole number
   if(amountRepeatTimes%1!==0){console.log("Repeat value isn't a whole number:",amountRepeatTimes);return false;}
   // Parse name and make it repeat as much times as
   // asked
   let parsedName = "";
   for(let i = 0; i < amountRepeatTimes; i++){
      parsedName+=name;
   }
   // Output the parsed name into the output container
   const nameElement = document.createElement('h1');
   nameElement.innerText=parsedName;
   outputContainer.appendChild(nameElement);
});
// 2) Sukurk input, kur vartotojas įves savo vardą. 
// Įvedus - console'ink kokio ilgio yra vardas. Tačiau užtikrink, 
// kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.
document.querySelector("#task2 .name-length-form").addEventListener('submit',(e)=>{
   e.preventDefault();
   clearOutputContainer();

   const nameLength = document.querySelector("#task2 .name-length").value.replaceAll(' ','').length;
   const lengthElement = document.createElement('h1');
   lengthElement.innerText=nameLength;
   outputContainer.appendChild(lengthElement);
});
// 3) Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, 
// kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.
// 4) Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis. 
// Jeigu žodžių daugiau negu du, tuomet antrąjį, trečiąjį ir visus likusius išvesti į antrąjį h1 laukelį.
document.querySelector("#task2 .name-surname-form").addEventListener('submit',(e)=>{
   e.preventDefault();
   clearOutputContainer();

   const nameSurnameArray = document.querySelector("#task2 .name-surname-input").value.split(" ");
   const nameElement = document.createElement('h1');
   const surnameElement = document.createElement('h1');

   nameElement.innerText=nameSurnameArray[0];
   for(let surname of nameSurnameArray){
      if(surname===nameSurnameArray[0]){continue;}
      surnameElement.innerText+=surname+" ";
   }

   outputContainer.appendChild(nameElement);
   outputContainer.appendChild(surnameElement);

});

