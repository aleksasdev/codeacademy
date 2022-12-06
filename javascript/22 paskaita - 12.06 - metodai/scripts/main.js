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
   document.querySelector('#task1 .output').innerHTML=price;
});
console.groupEnd();
