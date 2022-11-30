// LMAO. This is an easter egg :P

// Objects | Objektai
{
   let person = {
      vardas: "Josh",
      pavarde: "Clyton",
      occupation: "CEO",
      salary: "200k"
   }

   console.log(person.vardas);
   console.log(person.pavarde);
   console.log(person.salary);
   person.ugis = 190;
   console.log(person);
}

// Arrays | Masyvai
{
   let menesiai = ["Sausis", "Vasaris", "Kovas"];
   console.log(menesiai[0]);

   let object={
      array: ["Lol","Yay","Lmao","Ratio"]
   }
   console.log(object.array[Math.floor(Math.random()*object.array.length)]);
}

// Task 1
{
   console.groupCollapsed("Task 1");
   // 2) Susikurti konteinerius ir juos užpildyti reikšmėmis (bent po 1 kiekvieno tipo).
   // 2.1) Masyvas bent 6 ilgio. []
   // 2.2) Objektas bent 6 ilgio. {}
   let array1 = ["lol", "ratio", "lmao", "xd", "lowkey", "highkey"];
   let object1 = {
      name: "Joshua",
      vocabulary: "Gen-z",
      occaption: "Supreme Ruler Of The Universe",
      hobbies: "Play league",
      doesDrink: false,
      doesWorkout: true
   }

   // 2.3) Masyvas bent 4 ilgio, kurio viduje būtų kitas masyvas bent 4 ilgio.
   // 2.4) Masyvas bent 4 ilgio, kurio viduje būtų objektas bent 4 ilgio.
   // 2.5) Objektas bent 4 ilgio, kurio viduje būtų masyvas bent 4 ilgio.
   // 2.6) Objektas bent 4 ilgio, kurio viduje būtų objektas bent 4 ilgio.
   let array2 = ["lel", "deadchat", ["Bim", "Jim", "Kim", "Jong"], "hehexd"]
   let array3 = ["China", "Turkey", "Germany", {name: "Dove", occupation: "CEO", hobby: "Football", isMarried: true}]
   let object2 = {
      countries: null,
      continents: null,
      system: "erorr",
      anotherArrayHowCool: ["b","c","d","e"]
   }
   let object3 = {
      countries: null,
      continents: null,
      system: "erorr",
      anotherObjectHowCool: {name:"b",b:"c",c:"d",d:"e"}
   }
   // ----------------------------------------------------------------------------------------

   // 3) Į konsolę išvesti:
   // 3.1) Bent po 2 reikšmes iš 2.1 ir 2.2 konteinerių.
   // 3.2) Bent po 3 reikšmes iš 2.3-2.6 konteinerių su bent 1 reikšme esančia konteinerio konteineryje.
   console.log("Task 3.1 outputs:",array1[0], array1[1], object1.name, object1.vocabulary);
   console.log("Task 3.2 outputs [2.3 array]:",array2[0], array2[1], "[array in array] "+array2[2][2]);
   console.log("Task 3.2 outputs [2.4 array]:",array3[0], array3[1], "[object in array] "+array3[3].name);
   console.log("Task 3.2 outputs [2.5 object]:",object2.countries, object2.continents, "[array in object] "+object2.anotherArrayHowCool[1]);
   console.log("Task 3.2 outputs [2.6 object]:",object3.countries, object3.continents, "[object in object] "+object3.anotherObjectHowCool.a);
   // ----------------------------------------------------------------------------------------

   // 4) Palyginti ir į konsolę išvesti kokias nors:
   // 4.1) 2.1 konteinerio reikšmes.
   // 4.2) 2.2 konteinerio reikšmes.
   if(typeof(array1[0]) === "string"){console.log(true)}else{console.log(false)};
   if(typeof(object1.name[0]) === "string"){console.log(true)}else{console.log(false)};
   // ----------------------------------------------------------------------------------------
   
   // 4.3) 2.3-2.6 konteinerių reikšmes su jų viduje esančių konteinerių reikšmėmis.
   console.log("-4.3-");
   typeof(array2[2][0]) === "string" ? console.log("Array in [array2] | first value is a string") : console.log(false);
   typeof(array3[array3.length-1].name) === "string" ? console.log("Object in [array3] | name value is a string") : console.log(false);
   typeof(object2.anotherArrayHowCool[0]) === "string" ? console.log("Array in [object2] | first value is a string") : console.log(false);
   typeof(object3.anotherObjectHowCool.name) === "string" ? console.log("Object in [object3] | name value is a string") : console.log(false);
   // ----------------------------------------------------------------------------------------

   // 4.4) 2.3-2.6 konteinerių reikšmes su kitų konteinerių reikšmėmis (3kartus skirtingas reikšmes).
   console.log("-4.4-");
   var arrayNameInQuestion = "Array2";
   array2[2]===array1[2] ? console.log(arrayNameInQuestion,"[2] value == Array1 [2] value") : console.log(arrayNameInQuestion,"[2] value != Array1 [2] value");
   array2[2].length===array1[2].length ? console.log(arrayNameInQuestion,"[2] length == Array1 [2] length") : console.log(arrayNameInQuestion,"[2] length != Array1 [2] length");
   array2[2].length>array1[3].length ? console.log(arrayNameInQuestion,"[2] length > Array1 [3] length") : console.log(arrayNameInQuestion,"[2] length < Array1 [3] length");
   console.log("---");
   arrayNameInQuestion = "Array3";
   array3[2]===array1[2] ? console.log(arrayNameInQuestion,"[2] value == Array1 [2] value") : console.log(arrayNameInQuestion,"[2] value != Array1 [2] value");
   array3[2].length===array1[2].length ? console.log(arrayNameInQuestion,"[2] length == Array1 [2] length") : console.log(arrayNameInQuestion,"[2] length != Array1 [2] length");
   array3[2].length>array1[3].length ? console.log(arrayNameInQuestion,"[2] length > Array1 [3] length") : console.log(arrayNameInQuestion,"[2] length < Array1 [3] length");
   console.log("---");
   var objectNameInQuestion = "Object2";
   object2.anotherArrayHowCool[2]==array1[2] ? console.log(objectNameInQuestion,"[2] value == Array1 [2] value") : console.log(objectNameInQuestion,"[2] value != Array1 [2] value");
   object2.anotherArrayHowCool[2]===array1[2].length ? console.log(objectNameInQuestion,"[2] length == Array1 [2] length") : console.log(objectNameInQuestion,"[2] length != Array1 [2] length");
   object2.anotherArrayHowCool[2]>array1[3].length ? console.log(objectNameInQuestion,"[2] length > Array1 [3] length") : console.log(objectNameInQuestion,"[2] length < Array1 [3] length");
   console.log("---");
   objectNameInQuestion = "Object3";
   object3.anotherObjectHowCool.name==array1[2] ? console.log(objectNameInQuestion,"anotherObject.name == Array1 [2] value") : console.log(objectNameInQuestion,"anotherObject.name != Array1 [2] value");
   object3.anotherObjectHowCool.name===array1[2].length ? console.log(objectNameInQuestion,"anotherObject.name == Array1 [2] length") : console.log(objectNameInQuestion,"anotherObject.name != Array1 [2] length");
   object3.anotherObjectHowCool.name>array1[3].length ? console.log(objectNameInQuestion,"anotherObject.name > Array1 [3] length") : console.log(objectNameInQuestion,"anotherObject.name < Array1 [3] length");
   // ----------------------------------------------------------------------------------------

   // 5) Parašyti if'ą, kuris tikrintų kokia tavo lytis (tikrinimas turi vykti iš object kintamojo (object kintamasis turi turėti bent 4 kintamuosiuos savo viduje)).
      //   Naudoti:
      //   1) let/const - kurti kintamuosius (objektą/us)
      //   optional) prompt - vartotojas priskirtų objektui reikšmes
      //   2) alert/console.log - grąžintų atsakymus.
      //   3) if/elseIf/else - kas be ko... (arrrrrrrrrba ternary)
   
   // ----------------------------------------------------------------------------------------
   let lytis = {
      normal: ["man","woman"],
      sayianGenders: ["sayianMan", "sayianWoman"],
      alienGenders: ["alienMan", "alienWoman"],
   }
   console.groupEnd();
}

// Ternary
{
   let isValid = true;
   isValid ? console.log("isValid:",true) : console.log("isValid:",false);
}

// For loop
{
   console.groupCollapsed("For");
   for(let i = 0; i < 10; i++){
      console.log("Oba i europa",i+1)
   }
   console.groupEnd();
}

// Task 2
{
   console.group("Task 2");
   // 6) Parašyti ciklą, kuris sukurtų 50 random skaičių (nuo 0 iki 100) masyvą.
   var arrayWithRandomNumbers = [];
   for(let i = 0; i < 50; i++){
      arrayWithRandomNumbers.push(Math.floor(Math.random()*100))
   }
   console.log(arrayWithRandomNumbers);

   // 7) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.
   {
      console.groupCollapsed("Every third number")
      for(let i = 0; i < arrayWithRandomNumbers.length; i++){
         if(i === 0){console.log(arrayWithRandomNumbers[0]);continue};
         i % 3 === 0 ? console.log(arrayWithRandomNumbers[i]) : null;
      }
      console.groupEnd();
   }

   // 8) Parašyti ciklą, kuris išspausdintų kas antrą masyvo elementą nuo galo.
   {
      console.groupCollapsed("Every second number reversed")
      arrayWithRandomNumbers = arrayWithRandomNumbers.reverse();
      for(let i = 0; i < arrayWithRandomNumbers.length; i++){
         if(i === 0){console.log(arrayWithRandomNumbers[0]);continue};
         i % 2 === 0 ? console.log(arrayWithRandomNumbers[i]) : null;
      }
      console.groupEnd();
   }

   // 9) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.
   {
      console.groupCollapsed("Every number that's bigger than 54");
      for(let i = 0; i < arrayWithRandomNumbers.length; i++){
         arrayWithRandomNumbers[i] > 54 ? console.log(arrayWithRandomNumbers[i]) : null;
      }
      console.groupEnd();
   }

   // 10) Parašyti ciklą, kuris iš masyvo išspausdintų tik lyginius/nelyginius skaičius. (2ciklai)
   {
      let scannedNumbersCount = 0;
      console.groupCollapsed("Even and uneven numbers");
      {
         console.group("Even");
         for(let i = 0; i < arrayWithRandomNumbers.length; i++){
            arrayWithRandomNumbers[i] % 2 === 0 ? console.log(arrayWithRandomNumbers[i]) : null;
            scannedNumbersCount++;
         }
         console.groupEnd();
      }
      {
         console.group("Uneven");
         for(let i = 0; i < arrayWithRandomNumbers.length; i++){
            arrayWithRandomNumbers[i] % 2 === 0 ? null : console.log(arrayWithRandomNumbers[i]);
            scannedNumbersCount++;
         }
         console.groupEnd();
      }
      console.log(`Scanned numbers count: ${scannedNumbersCount}`)
      console.groupEnd();
   }

   

   console.groupEnd();
}

// Task extra
{
   console.groupCollapsed("Task extra");
   // extra 1) Parašyti ciklą, kuris atlieka Fizz Buzz testą nuo 0 iki 100.
   {
      console.group("Fizz Buzz");
      for(let i = 0; i < arrayWithRandomNumbers.length; i++){
         if(arrayWithRandomNumbers[i]/3 % 2 === 0 && arrayWithRandomNumbers[i]/5 % 2 === 0){
            console.log(arrayWithRandomNumbers[i],"FizzBuzz");
         }
         else if(arrayWithRandomNumbers[i]/3 % 2 === 0){
            console.log(arrayWithRandomNumbers[i],"Fizz");
         }
         else if(arrayWithRandomNumbers[i]/5 % 2 === 0){
            console.log(arrayWithRandomNumbers[i],"Buzz");
         }
         else{
            console.log(arrayWithRandomNumbers[i]);
         }
      }
      console.groupEnd();
   }

   // EXTRA 2) Parašyti ciklą, kuris atrinktų ir į konsolę išspausdintų tik pirminius skaičius intervale nuo 0 iki 100.
   {
      console.group("EXTRA task");
      for(let i = 0; i < 101; i++){
      }
      console.groupEnd();
   }
   console.groupEnd();
}