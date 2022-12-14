class CreateCar{
   #carsArray=[];
   #outputElement;
   constructor(outputElement){
      this.#outputElement=outputElement;
   }
   add(props){
      this.#carsArray.push({
         brand: props.brand,
         mileage: props.mileage,
         model: props.model,
         price: props.price,
         url: props.url
      });
   }
   flush(){
      let handleHover=()=>{
         console.log("aa")
      };

      this.#outputElement.innerHTML="";
      this.#carsArray.forEach(element=>{
         this.#outputElement.innerHTML+=
         `
         <div class="output-item">
            <img src="${element.url}"/>
            <div class="description-container">

            </div>
            <h3 style="align-self:flex-start;">${element.brand.toUpperCase()}</h3>
         </div>
         `
      });
   }
}
const createCar = new CreateCar(document.querySelector("#task2 .output-container"));
document.querySelector("#task2 form").addEventListener('submit',e=>{
   e.preventDefault();
   console.log(e.target.elements);
   createCar.add({
      brand: e.target.elements[0].value,
      mileage: e.target.elements[2].value,
      model: e.target.elements[1].value,
      price: e.target.elements[3].value,
      url: e.target.elements[4].value,
   });
   createCar.flush();
});