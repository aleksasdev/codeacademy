// 1
const foodArray=[
   {id:0,name:"burger",inStock:false,primeCost:0.3,cost:1.3},
   {id:1,name:"fries",inStock:false,primeCost:0.24,cost:1.31},
   {id:2,name:"steak",inStock:true,primeCost:0.4,cost:2},
   {id:3,name:"cola",inStock:true,primeCost:0.1,cost:13},
   {id:4,name:"pepsi",inStock:true,primeCost:0.13,cost:1.12},
   {id:5,name:"dumplings",inStock:false,primeCost:0.2,cost:2},
   {id:5,name:"beetroot soup",inStock:true,primeCost:0.2,cost:1.4},
   {id:6,name:"pizza",inStock:true,primeCost:0.51,cost:2.6},
   {id:7,name:"ice cream",inStock:true,primeCost:0.12,cost:1.49},
   {id:8,name:"vegan soup",inStock:false,primeCost:0.5,cost:1.4},
   {id:9,name:"pickle soup",inStock:false,primeCost:0.13,cost:1.34},
]
console.group("Task 2");

// 2
console.groupCollapsed("Array items");
foodArray.forEach(element=>console.log(element));
console.groupEnd();

// 3
console.groupCollapsed("Name and price values")
foodArray.forEach(element=>console.log("name:",element.name, "price:",element.cost));
console.groupEnd();

// 4
const foodArrayInStock = foodArray.filter(element=>element.inStock);
console.log("Only in stock\n",foodArrayInStock);

// 4.1
const foodArrayProfit = foodArrayInStock.map(element=>{
   return {
      name:element.name,
      profit:(element.cost-element.primeCost).toFixed(2)+"eur"
   }
});
console.log("Profit from items\n",foodArrayProfit);

// 4.2
// God, why have I sinned so terribly? This very function's existence
// is a vile crime... but basically...
// we iterate for random amount of times and in each cycle,
// we'll push a random item from in stock array to the
// array of orders.
const foodArrayOrders = [];
for(let i = 0; i < Math.floor(Math.random()*15+1); i++){
   let randomOrder = Math.floor(Math.random()*foodArrayInStock.length);
   foodArrayOrders.push({
      name: foodArrayInStock[randomOrder].name,
      orderedAmount: Math.floor(Math.random()*5+1),
      cost: foodArrayInStock[randomOrder].cost,
      primeCost: foodArrayInStock[randomOrder].primeCost
   });
}
console.log("Order list\n",foodArrayOrders);

// 4.3
const foodArrayProfitFromOrders = foodArrayOrders.map(element=>{
   return {
      name: element.name,
      profit: ((element.cost-element.primeCost)*element.orderedAmount).toFixed(2)+"eur",
      primeCost: element.primeCost,
      cost: element.cost,
      orderedAmount: element.orderedAmount
   }
});
console.log("Profit from orders\n",foodArrayProfitFromOrders);

// 4.4
const foodArrayReport = foodArrayProfitFromOrders.map(element=>{
   return {
      ordered: element.name+":"+element.orderedAmount,
      totalCost: (element.cost*element.orderedAmount).toFixed(2)+"eur"
   }
});
console.log("Full report\n",foodArrayReport);

console.groupEnd();


