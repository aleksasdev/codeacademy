// 1
class Car{
   constructor(name, year){
      this.name = name;
      this.year = year;
      this.helloText = `Hi! This is my car ${name} and it's been made in ${year}`
   }
   getCarAge(){
      return new Date().getFullYear()-this.year;
   }
}
let car = new Car("Bentley", 2020);
console.log("Car age",car.getCarAge());

// 2
class Rectangle{
   constructor(width, height){
      this.width = width;
      this.height = height;
      this.color = Math.floor(Math.random()*16777215).toString(16);
   }
   getArea(){
      return this.width*this.height;
   }
   getPerimeter(){
      return (2*this.height)+(2*this.width);
   }

}
let rectangle = new Rectangle(50,50);
console.log("Area",rectangle.getArea());
console.log("Perimeter",rectangle.getPerimeter());

// 3
class Point{
   constructor(x, y){
      this.x = x;
      this.y = y;
   }
   getCoordinates(){
      return [this.x,this.y];
   }
   getDistance(anotherPoint){
      return Math.hypot(anotherPoint.x-this.x, anotherPoint.y-this.y);
   }
}
let point = new Point(5,5);
let point2 = new Point(15,35);
console.log("Distance",point.getDistance(point2));

// 4
class Rectangle3D{
   constructor(width, height, depth){
      this.width = width;
      this.height = height;
      this.depth = depth;
   }
   getVolume(){
      return this.width*this.height*this.depth;
   }
   getSurfaceArea(){
      return 2*(this.depth*this.height)+2*(this.height*this.width)+2*(this.depth*this.width);
   }
   getPerimeter(){
      return 2*(this.width+this.height)+2*(this.depth+this.height)+2*(this.width+this.depth);
   }
}
let rectangle3D = new Rectangle3D(50,50,10);
console.log("Volume",rectangle3D.getVolume());
console.log("Surface area",rectangle3D.getSurfaceArea());
console.log("Perimeter",rectangle3D.getPerimeter());