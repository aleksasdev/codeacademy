// Task 1
// 1) Sukurti funkcijas, kurios atliktų paprastus matematinius veiksmus su duotaisiais parametrais (du parametrai). (4 funkcijos) (optional 7 funkcijos)
function doAdd(props){
   return props.num1+props.num2;
}
function doSubtract(props){
   return props.num1-props.num2;
}
function doMultiply(props){
   return props.num1*props.num2;
}
function doDivide(props){
   return props.num1/props.num2;
}

// 2) Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo pirmo iki paskutinio.
function getArrayElements(array){
   let outputArray = []
   for(let arrayElement of array){
      outputArray.push(arrayElement);
   }
   return outputArray;
}

// 3) Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo paskutinio iki pirmojo.
function getArrayElementsReversed(array){
   let outputArray = []
   for(let arrayElement of array.reverse()){
      outputArray.push(arrayElement);
   }
   return outputArray;
}

// 4) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su string kintamaisiais))) abeceliškai ir ją išvestų į konsolę.
function sortStrings(array){
   return array.sort();
}

// 5) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su number kintamaisiais))) nuo didžiausio iki mažiausio ir ją išvestų į konsolę.
function sortIntegers(array){
   return array.sort((b, a) => a - b);
}

// 6) Sukurti funkciją, kuri į konsolę išvestų visus skaičius nuo pirmo duotojo parametro (imtinai) iki antrojo (imtinai). (paduodu 5,9 => grąžina 5,6,7,8,9)
function getNumbersFromTo(num1, num2){
   let outputArray = [];
   for(let i = num1; i < num2+1; i++){
      outputArray.push(i);
   }
   return outputArray;
}

// 7) Sukurti funkciją, kuri į konsolę išvestų skaičius kas pirmąjį duotajį parametrą nuo antrojo duotojo parametro (imtinai) iki trečiojo duotojo parametro (imtinai). (paduodu 2,5,9 => grąžina 5,7,9)
function getEveryNth(num1, num2, num3){
   let outputArray = [];
   for(let i = num2; i < num3+1; i+=num1){
      outputArray.push(i);
   }
   return outputArray;
}

// 8) Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Petrauskas" => 16).
function getNameSurnameLength(name, surname){
   return (name+surname.length);
}

// 9) Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę.
function getAlphabetFromNumber(number){
   let alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
   return alphabetArray[number-1];
}

// 10) Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.
function doNextLevelMathematics(n1, n2, operator){
   if(operator==="+"||operator==="add"){return n1+n2}
   if(operator==="-"||operator==="sub"){return n1-n2}
   if(operator==="*"||operator==="multi"){return n1*n2}
   if(operator==="/"||operator==="div"){return n1/n2}
}

// 11) Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).
// I konsole desime sita komanda: GetSquaredNumber(GenerateRandomNumber());
function getRandomNumber(){
   let randomNumber = Math.floor(Math.random()*11);
   console.log("Generated number:",randomNumber);
   return randomNumber;
}
function getSquaredNumber(number){
   return number**2;
}

// EXTRA-0 Sukurti funkciją, kuri pirmojo parametro (masyvo) elementus sudėtų į kito parametro (masyvo irgi) vidų toje vietoje, kokio ilgio yra antrasis parametras (tuo momentu) tol kol antrasis parametras liks tuščias. (a=[1,2,3,4,5,6,7]b=[a,b,c]; a=[1,2,3,a,4,5,6,7]b=[b,c]; a=[1,2,b,3,a,4,5,6,7]b=[c]; a=[1,c,2,b,3,a,4,5,6,7]b=[])
function whatIsThis(array, secondArray){
   let newArray = [];
   for(let i = 0; i < array.length; i++){
      if(i === secondArray.length){
         for(let element of secondArray){newArray.push(element)};
         newArray.push(array[i]);
      }else{
         newArray.push(array[i]);
      }
   }
   return newArray;
}

// EXTRA 1 Sukurti funkciją, kuri atlieka Fizz Buzz testą nuo-iki duotųjų parametrų.
function doFizzBuzzOnSteroids(from, to){
   let outputArray = [];
   for(let i = from; i < to+1; i++){
      if(i/3 % 2 === 0 && i/5 % 2 === 0){outputArray.push(i+" FizzBuzz")}
      else if(i/3 % 2 === 0){outputArray.push(i+" Fizz")}
      else if(i/5 % 2 === 0){outputArray.push(i+" Buzz")}
      else{outputArray.push(i)};
   }
   return outputArray;
}

