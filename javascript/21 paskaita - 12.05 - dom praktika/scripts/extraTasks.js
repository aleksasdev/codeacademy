// We'll execute fizzbuzz logic here
function doFizzBuzz(e){
   e.preventDefault();
   const fromNumber = e.target.elements[0].value;
   const toNumber = e.target.elements[1].value;

   const outputContainer = document.querySelector('#extra-tasks .output-container');

   // Clear out everything from the output container
   while(outputContainer.firstChild){outputContainer.removeChild(outputContainer.firstChild)};
   console.log("Fizzbuzzing","from number:",fromNumber,"to number:",toNumber);
   for(let i = fromNumber; i < toNumber; i++){
      if(i % 3 === 0 && i % 5 === 0){
         const outputItem = document.createElement('div');
         outputItem.classList.add('output-item-styling');
         outputItem.innerText="FizzBuzz\n ("+i+")";
         outputItem.style.color="lightgreen";
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

// Function that checks if it's a prime number or not
const isPrimeNumber = num => {
   for(let i = 2, s = Math.sqrt(num); i <= s; i++)
       if(num % i === 0) return false; 
   return num > 1;
}
// We'll execute prime numbers logic here
function doPrimeNumbers(e){
   e.preventDefault();

   const toNumber = e.target.elements[0].value;
   const outputContainer = document.querySelector('#extra-tasks .output-container');

   // Clear out the output container
   while(outputContainer.firstChild){outputContainer.removeChild(outputContainer.firstChild)};

   // Get all prime numbers and render them on
   // the output container
   for(let i = 0; i < toNumber; i++){
      if(isPrimeNumber(i)){
         const outputItem = document.createElement('div');
         outputItem.classList.add('output-item-styling');
         outputItem.innerText="("+i+")";
         outputItem.style.color="purple";
         outputContainer.appendChild(outputItem);
      }
   };
   
}
document.querySelector('#extra-tasks .prime-numbers-container').addEventListener('submit',(e)=>{
   doPrimeNumbers(e);
});
