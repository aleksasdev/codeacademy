class Animal{
   #name;
   #legsAmount;
   constructor(name, legsAmount){
      this.#name=name;
      this.#legsAmount=legsAmount;
   }
   getName(){return this.#name};
   setName(string){this.#name=string};
}

class Cat extends Animal{
   constructor(legsAmount){
      super("Cat",legsAmount);
   }
   #getMeowType(){
      let meowArray = ['Meeeeeeeeeeow', 'Meow', 'Meh.',"You peasant, serve me, NOW."]
      return meowArray[Math.floor(Math.random()*meowArray.length)];
   }
   doMeow(){return this.#getMeowType()};
}

let animal = [
   new Animal('Cat',4)
]
animal[0].setName("lel");
console.log(animal[0].getName());
console.log(new Cat(3).doMeow());