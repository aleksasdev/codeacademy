// Task 1
let letterA = "a";
let letterB = "b"
let letterC = "c";
let letterD = "d";
let letterE = "e";
let number1 = 1;
let number2 = 2;
let number3 = 3;
let number4 = 4;
let number5 = 5;

const jsHasTooManyFrameworks = true;
const jsHasRidiculousThingsInIt = true;

// Task 2
{
   console.log("Strings");
   console.log(letterA+letterB);
   console.log(letterA-letterB);
   console.log(letterA*letterB);
   console.log(letterA/letterB);
   console.log(letterA**letterB);

   console.log("Numbers");
   console.log(number1+number2);
   console.log(number1-number2);
   console.log(number1*number2);
   console.log(number1/number2);
   console.log(number1**number2);

   console.log("Booleans lmao");
   console.log(jsHasTooManyFrameworks+jsHasRidiculousThingsInIt);
   console.log(jsHasTooManyFrameworks-jsHasRidiculousThingsInIt);
   console.log(jsHasTooManyFrameworks*jsHasRidiculousThingsInIt);
   console.log(jsHasTooManyFrameworks/jsHasRidiculousThingsInIt);
   console.log(jsHasTooManyFrameworks**jsHasRidiculousThingsInIt);
}

// Task 3
{
   console.log("Task 3")
   console.log("number1++",number1++);
   console.log("number1--",number1--);
   console.log("number1+=",number1+=1);
   console.log("number1-=",number1-=1);
   console.log("number1*=",number1*=1);
   console.log(number1/=1);
   console.log(number1**=1);
}

// Task 4
{
   let hasLicenses = false;
   let hasCar = true;
   let isSober = true;
   if(hasLicenses && hasCar && isSober){
      console.log("The driver can continue on his way");
   }
   else{
      console.log("The driver can't continue driving because he doesn't meet one of the requirements");
   }
}

// Task 5
{
   let name = prompt("Tavo vardas?");
   let city = prompt("Iš kokio miesto esi?");
   let nameEnding = name.slice(-2);
   
   if(nameEnding === "as"){
      name = name.slice(0, -1)+"i";
   }
   alert("Puiku "+name+", jūsų miestas yra: "+city);
}
