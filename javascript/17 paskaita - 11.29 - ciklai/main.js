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
   
   // 4.3) 2.3-2.6 konteinerių reikšmes su jų viduje esančių konteinerių reikšmėmis.
   console.log("-4.3-");
   typeof(array2[2][0]) === "string" ? console.log("Array in [array2] | first value is a string") : console.log(false);
   typeof(array3[array3.length-1].name) === "string" ? console.log("Object in [array3] | name value is a string") : console.log(false);
   typeof(object2.anotherArrayHowCool[0]) === "string" ? console.log("Array in [object2] | first value is a string") : console.log(false);
   typeof(object3.anotherObjectHowCool.name) === "string" ? console.log("Object in [object3] | name value is a string") : console.log(false);

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

}

// Ternary
{
   let isValid = true;
   isValid ? console.log("isValid:",true) : console.log("isValid:",false);
}