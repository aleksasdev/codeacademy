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
   let array1 = ["lol", "ratio", "lmao", "xd", "lowkey", "highkey"];
   let object1 = {
      name: "Joshua",
      vocabulary: "Gen-z",
      occaption: "Supreme Ruler Of The Universe",
      hobbies: "Play league",
      doesDrink: false,
      doesWorkout: true
   }

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
      anotherObjectHowCool: {a:"b",b:"c",c:"d",d:"e"}
   }

   console.log("Task 3.1 outputs:",array1[0], array1[1], object1.name, object1.vocabulary);
   console.log("Task 3.2 outputs [2.3 array]:",array2[0], array2[1], "[array in array] "+array2[2][2]);
   console.log("Task 3.2 outputs [2.4 array]:",array3[0], array3[1], "[object in array] "+array3[3].name);
   console.log("Task 3.2 outputs [2.5 object]:",object2.countries, object2.continents, "[array in object] "+object2.anotherArrayHowCool[1]);
   console.log("Task 3.2 outputs [2.6 object]:",object3.countries, object3.continents, "[object in object ] "+object3.anotherObjectHowCool.a);

}