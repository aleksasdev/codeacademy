console.group("Task 3");
const array = ["pizza","burger","eggs","kefir","mango","apple"
   ,"bread","chicken","Pancake","Ice cream"]
const object = {
   unhealthy: ["pizza","burger","ice cream"],
   healthy: ["eggs","apple","mango"],
   nonFood: ["box","plate"]
}
const arrayExercise3 = ["Banana","Apple","Mango","Milk","Pork"]

// 1
const [unhealthy, veryUnhealthy] = array;
console.log(unhealthy, veryUnhealthy);

// 2
const [pizza, burger, eggs, kefir, mango, apple, bread, chicken, pancake, iceCream] = array;
// Not gonna print all that xd

// 3
const [one, two, ...remaining] = arrayExercise3;
console.log(one,two,remaining);

// 4
const [, , , ...rest] = array;
console.log(rest);

// 5
const {unhealthy:unhealthyFood, healthy:healthyFood, nonFood} = object;
console.log(unhealthyFood,healthyFood,nonFood);

// 6
const {unhealthy:changedOne, healthy:changedTwo} = object;
console.log(changedOne,changedTwo);

console.groupEnd();