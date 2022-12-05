// We'll execute fizzbuzz logic here
function doFizzBuzz(e){
   e.preventDefault();
   const fromNumber = e.target.elements[0].value;
   const toNumber = e.target.elements[1].value;

   const outputContainer = document.querySelector('#extra-tasks .output-container');

   console.log("Fizzbuzzing","from number:",fromNumber,"to number:",toNumber);
   for(let i = fromNumber; i < toNumber; i++){
      if(i % 3 === 0 && i % 5 === 0){
         const outputItem = document.createElement('div');
         outputItem.classList.add('output-item-styling');
         outputItem.innerText="FizzBuzz\n ("+i+")";
         outputItem.style.color="red";
         outputContainer.appendChild(outputItem);
      }else if(i % 3 === 0){
         const outputItem = document.createElement('div');
         outputItem.classList.add('output-item-styling');
         outputItem.innerText="Fizz\n ("+i+")";
         outputItem.style.color="purple";
         outputContainer.appendChild(outputItem);
      }else if(i % 5 === 0){
         const outputItem = document.createElement('div');
         outputItem.classList.add('output-item-styling');
         outputItem.innerText="Buzz\n ("+i+")";
         outputItem.style.color="black";
         outputContainer.appendChild(outputItem);
      }else{
         const outputItem = document.createElement('div');
         outputItem.classList.add('output-item-styling');
         outputItem.innerText="("+i+")";
         outputItem.style.color="white";
         outputContainer.appendChild(outputItem);
      }
   }
}
document.querySelector('#extra-tasks .fizzbuzz-container').addEventListener('submit',(e)=>{
   doFizzBuzz(e);
});

// We'll execute prime numbers logic here