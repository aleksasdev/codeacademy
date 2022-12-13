// Bad example
let users = [
   {
      name: "Alex",
      age: 22,
      hasKids: false
   }
]

// Good example
{
class User{
   constructor(name, age, hasKids){
      this.name = name;
      this.age = age;
      this.hasKids = hasKids;
   }
   sayHello(){
      return ("Hello! "+this.name);
   }
}

let user = new User("Alex",22,false);
let user2 = new User("Lol",555555,false);
console.log(user.sayHello());
}

class IceCream{
   constructor(name, taste, price){
      this.name = name;
      this.taste = taste;
      this.price = price;
   }
}

const iceCreamArray = [
   new IceCream("Dadu","Caramel",1.4),
   new IceCream("Tatu","Plombyr",2.4),
   new IceCream("Fufu","Chocolate",0.4)
]