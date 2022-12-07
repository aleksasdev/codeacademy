// Helper
var taskIndex = 0;
let getTaskNumber = ()=>{taskIndex++;return "["+taskIndex+"]";}

console.group("Task2");

// 1
let doArrayToString = array=>{
   let newString="";
   array.forEach((element)=>newString+=element);
   return newString;
}
console.log(getTaskNumber(),doArrayToString(["lmao","yoyo","aha"]));

// 2
let getReversedArray = array=>{
   let reversedArray=[];
   for(let i = array.length-1; i >= 0; i--){reversedArray.push(array[i])};
   return reversedArray;
}
console.log(getTaskNumber(),getReversedArray(["One","Two","Three","Four","Five"]));

// 3
let getBiggestAndSmallestNumber = array=>{
   // Get biggest number
   for(let number of array){
      // Take every number from given array and test it against
      // all the other numbers in the same array, if it's smaller
      // than at least one number, then it isn't the biggest
      let isBiggestNumber=true;
      for(let anotherNumber of array){
         if(number<anotherNumber){isBiggestNumber=false;break};
      }
      if(isBiggestNumber){console.log("Biggest number is:",number);break};
   };

   // Get smallest number
   for(let number of array){
      // We do the same thing as before, but in reverse, if at least
      // one number from the array is smaller than the number in
      // question, we can conclude that the number in question isn't
      // the smallest number
      let isSmallestNumber=true;
      for(let anotherNumber of array){
         if(number>anotherNumber){isSmallestNumber=false;break};
      }
      if(isSmallestNumber){console.log("Smallest number is:",number);break};
   };
}
console.log(getTaskNumber());
getBiggestAndSmallestNumber([4,5,11,44,667,743,222,1112,3,4342244,3242422,3,2.5]);

// 4
let getRepeatingElement = (array1,array2)=>{
   array1.forEach(element=>{
      for(let secondArrayElement of array2){
         if(element===secondArrayElement){console.log("Element: ["+element+"] has been found in both arrays"); break};
      }
   });
}
console.log(getTaskNumber());
getRepeatingElement(["lel","yes","dada", "eggo",3],["lel","no","ahaha","eggo",3]);

// 5
let createArrayFromIndexes = (array,indexArray)=>{
   let newArray=[];
   array.forEach(element=>{
      for(let index of indexArray){
         element===array[index]?newArray.push(element):null;
      }
   });
   return newArray;
}
console.log(getTaskNumber(),createArrayFromIndexes(["One","Two","Three","Four","Five"], [0,1,2]));

console.groupEnd();