// Global arrays
const stringsArray = ["lala","blaupa","beluga","cs","tada"];
const numbersArray = [2,3,5,777,8,21,234,1,2,4,6];
const mixedArray = ["lupa",false,true,2,3,4,5,6,"joooo","yes",true];
const carsArray = ["BMW", "VW", "Audi"];
const friendsArray = ["DoMce","remaS","ARminAs","LiNaS","aroNaS"];
const friendsAgesArray = [22,31,36,38,19,1,1,1,1];
const citiesArray = ["Vilnius","Kedainiai","Rokiskis","Klaipeda", "joniskis"];

// Global variables (not a good practice, but it'll
// suffice for this exercise)
let groupedTasks=[];
let index = 0;

// Run tasks method
// I was too lazy to call these functions one by one, so I made
// this monstrosity >:)
let runTasks = array=>{
   console.log("TASK["+index+"]----------------");
   index++;
   groupedTasks.forEach((task,i)=>{
      task(array);
   });
   groupedTasks=[];
}

console.groupCollapsed("Task 1");
// 0
groupedTasks.push(function(array){
   for(let element of array){console.log(element)};
})
groupedTasks.push(function(array){
   array.forEach(element=>console.log(element));
})
runTasks(stringsArray);

// 1-2
groupedTasks.push(function(array){
   array.forEach(car=>console.log(car));
})
groupedTasks.push(function(array){
   array.forEach((car,i)=>console.log(i+":",car));
})
runTasks(carsArray);

// 3
groupedTasks.push(function(array){
   console.log(array.map(name=>{return name[0].toUpperCase()+name.slice(1).toLowerCase()}));
})
runTasks(friendsArray);

// 4
groupedTasks.push(function(array){
   console.log(array.filter(age=>age>=18));
})
runTasks(friendsAgesArray);

// 5-6-7
groupedTasks.push(function(array){
   console.log(array.find(city=>city[0].toLowerCase()==="k"))
})
groupedTasks.push(function(array){
   console.log("Is there any city that starts with a lowercase?",
      array.some(city=>city[0]===city[0].toLowerCase()));
})
groupedTasks.push(function(array){
   console.log("Do all the cities start with a capital letter?",
      array.every(city=>city[0]===city[0].toUpperCase()));
})
runTasks(citiesArray);
console.groupEnd();


