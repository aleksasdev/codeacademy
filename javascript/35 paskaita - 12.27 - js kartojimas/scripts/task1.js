// JS array,string
// 1
let array = ["lol", "lmao", "bombom"]
function arrayToString(array){
   let string=""; array.forEach(element=>string+=element); return string;
}
console.log(1,arrayToString(array));

// 2

let number = "0242311321444341";
function seperateEvenNumbers(number){
   let index = 0;
   let answer = Array.from(String(number), Number).map((digit, index, array)=>{
      let parsedNumber = "";
      
      if(digit % 2 === 0 && array[index-1] % 2 === 0){
         parsedNumber="-"+digit.toString();
      }
      else{parsedNumber+=digit.toString()};

      return parsedNumber;
   })
   let finalResult = ""; 
   answer.forEach(element=>finalResult+=element);
   return finalResult;
}
console.log(2, number, seperateEvenNumbers(number));

// 3
array = [5,3,1,"b","a"];
function doReverse(array){
   let reversedArray = []
   for(let i = array.length-1; i > -1; i-=1){
      reversedArray.push(array[i]);
   }
   return reversedArray;
}
console.log(3, array, doReverse(array));

// 4
array = [1,1,1,1,1,5,5,5,"a","b"];
function filterArray(array, elementsToFilter){
   return array.filter((element)=>{
      let pass = true;
      elementsToFilter.forEach(filterElement=>{element===filterElement?pass=false:null});
      return pass;
   })
}
console.log(4, array, filterArray(array, [1, 5]));

