// 1
let helloWorld = ()=>"Hello";
console.log("(1)",helloWorld());

// 2
let addNumbers = (num1,num2)=>num1+num2;
console.log("(2)",addNumbers(5,10));

// 3
let getStringLength = (word)=>word.length;
console.log("(3)",getStringLength("laaaaaabas"));

// 4
let getStringFirstLetter = (word)=>word[0];
console.log("(4)",getStringFirstLetter("jojo"));

// 5
let getStringLastLetter = (word)=>word[word.length-1];
console.log("(5)",getStringLastLetter("fadu"));

// 6
let getNumberPow = (number)=>number**2;
console.log("(6)",getNumberPow(5));

// 7
let printAllVariablesInArray = (array)=>{
   for(let object of array){console.log(object)}
};
console.log("(7)");printAllVariablesInArray(["lel","vaduuba","hehe"]);

// 8
let printAllVariablesInArray_2n = (array)=>{
   for(let i = 0; i < array.length; i+=2){console.log(array[i])}
};
console.log("(8)");printAllVariablesInArray_2n(["every","nope","second","nah","element"]);

// 9
let printAllVariablesInArray_n = (n,array)=>{
   for(let i = 0; i < array.length; i+=n){console.log(array[i])}
};
console.log("(9)");printAllVariablesInArray_n(3,["blah","yay","haha","kuku","ciungachanga"]);

// 10
let printAllEvenNumbersInArray = (array)=>{
   for(let number of array.sort()){number%2===0?console.log(number):null}
};
console.log("(10)");printAllEvenNumbersInArray([5,2,3,4,5,1,3,4,5,76]);

// 11
let printAllOddNumbersInArray = (array)=>{
   for(let number of array.sort()){number%2===1?console.log(number):null}
};
console.log("(11)");printAllOddNumbersInArray([5,2,3,4,5,1,3,4,5,76,77,33]);

// 12
let printStringsThreeInLength = (array)=>{
   for(let word of array){word.length>3?console.log(word):null}
};
console.log("(12)");printStringsThreeInLength(["no","noo","yees","kuku","gogo"]);

// 13
let printStringsWithStartingLetter = (startingLetter, array)=>{
   for(let word of array){word[0]===startingLetter?console.log(word):null}
};
console.log("(13)");printStringsWithStartingLetter("c", ["cool","cat","can","capable","gogo"]);

// 14
let printWordsThatMeetConditions = (minWordLength,maxWordLength,array)=>{
   // Condition (1) must start with a lowercase letter
   // Condition (2) must be longer than min word length, but not longer than max word length
   for(let word of array){
      // Eliminate if the word doesn't start with lower case
      if(word[0]!==word[0].toLowerCase()){continue};
      // Check for the remaining conditions
      if(word.length > minWordLength && word.length <= maxWordLength){console.log(word)};
   }
};
console.log("(14)");
printWordsThatMeetConditions(2,10,["EliminateThis","t","ta","tat","laaaaaaaaaaaaaaa","gogo"]);

// 15
let getOnlyStringsArray = array=>{
   let newArrayOfStrings=[];
   for(let element of array){
      typeof(element)==="string"?newArrayOfStrings.push(element):null;
   }
   return newArrayOfStrings;
}
console.log("(15)",getOnlyStringsArray([2,3,4,5,"string",true,"anothaString"]));

// 16
let getOnlyStringsArrayWithCondition = (minWordLength, array)=>{
   let newArrayOfStrings=[];
   for(let element of array){
      if(typeof(element)!=="string"){continue};
      element.length > minWordLength?newArrayOfStrings.push(element):null;
   }
   return newArrayOfStrings;
};
console.log("(16)",getOnlyStringsArrayWithCondition(10, [2,3,4,5,"string44444","nopeString",true,"anothaString"]));

// 17
let getOnlyStringsArrayStartsUppercase = array=>{
   let newArrayOfStrings=[];
   for(let element of array){
      if(typeof(element)!=="string"){continue};
      element[0] === element[0].toUpperCase()?newArrayOfStrings.push(element):null;
   }
   return newArrayOfStrings;
};
console.log("(17)",getOnlyStringsArrayStartsUppercase([2,3,4,5,"string44444","nopeString",true,"StartsWithUppercase"]));

// 18
let getOnlyNumbersArray = array=>{
   let newArrayOfNumbers=[];
   for(let element of array){typeof(element)==="number"?newArrayOfNumbers.push(element):null};
   return newArrayOfNumbers;
};
console.log("(18)",getOnlyNumbersArray([2,3,4,5,"string44444","nopeString",true,5000,"StartsWithUppercase"]));

// 19
let getOnlyNumbersArrayMin = (minNumber,array)=>{
   let newArrayOfNumbers=[];
   for(let element of array){
      if(typeof(element)!=="number"){continue};
      element>minNumber?newArrayOfNumbers.push(element):null;
   }
   return newArrayOfNumbers;
};
console.log("(19)",getOnlyNumbersArrayMin(4,[2,3,4,5,"string44444","nopeString",true,5000,"StartsWithUppercase"]));

// 20
let getOnlyNumbersArrayMax = (maxNumber,array)=>{
   let newArrayOfNumbers=[];
   for(let element of array){
      if(typeof(element)!=="number"){continue};
      element<maxNumber?newArrayOfNumbers.push(element):null;
   }
   return newArrayOfNumbers;
};
console.log("(20)",getOnlyNumbersArrayMax(4,[2,3,4,5,"string44444","nopeString",true,5000,"StartsWithUppercase"]));

// 21
let getOnlyNumbersArrayWithCondition = (minNumber,maxNumber,array)=>{
   let newArrayOfNumbers=[];
   for(let element of array){
      if(typeof(element)!=="number"){continue};
      if(element>minNumber && element<maxNumber){newArrayOfNumbers.push(element)};
   }
   return newArrayOfNumbers;
};
console.log("(21)",getOnlyNumbersArrayWithCondition(4, 10,[2,3,7,4,5,11,12,"string44444","nopeString",true,5000,"StartsWithUppercase"]));

// 22
let getOnlyNumbersArrayWithConditionOddEven = (evenNumbers,minNumber,maxNumber,array)=>{
   let newArrayOfNumbers=[];
   for(let element of array){
      if(typeof(element)!=="number"){continue};
      if(element<=minNumber || element>=maxNumber){continue};
      if(evenNumbers && element%2 === 0){newArrayOfNumbers.push(element)};
      if(!evenNumbers && element%2 === 1){newArrayOfNumbers.push(element)};
   }
   return newArrayOfNumbers;
};
console.log("(22)",getOnlyNumbersArrayWithConditionOddEven(false,1,10,[2,3,7,4,5,11,12,"string44444","nopeString",true,5000,"StartsWithUppercase"]));
