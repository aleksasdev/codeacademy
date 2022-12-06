console.groupCollapsed("Math");
let word = "adasdsadasaf"
let number = 50.426234324;
console.log("toFixed()",number.toFixed(2));
console.log(word.slice(-1));
console.groupEnd();

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
   const price = parseFloat(document.querySelector('#task1 form .price').value).toFixed(2);
   document.querySelector('#task1 .output').innerHTML=price+" eur";
});
console.groupEnd();

// Task 2
//  1) Sukurk du input'us - vieną, kur vartotojas įves savo vardą; 
// kitą - skaičių. Pirma, patikrink ar skaičius sveikas 
// (jei ne - console). Jei sveikas, po apačia sukurk h1 elementą, 
// kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.
document.querySelector("#task2 form").addEventListener('submit',(e)=>{
   e.preventDefault();
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
   // Output the parsed name into a h1 element
   document.querySelector('#task2 .output').innerHTML=parsedName;
});
