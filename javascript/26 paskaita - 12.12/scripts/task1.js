import { data } from './data.js';

const menuContainer = document.querySelector('#menu');
const billContainer = document.createElement('div');

const createMenu=()=>{
   // Create elements
   data.forEach(element=>{
      const div = document.createElement('div');
      div.addEventListener('click', e=>handleAddingOrder(e));
      div.classList.add('menu-item');
      div.id=element.id;
      div.innerText=element.pavadinimas;
      menuContainer.append(div);
   });

}

const createBill=()=>{
   billContainer.classList.add('bill-container');
   billContainer.innerHTML=
   `
   ${new Date().toLocaleDateString('lt-LT', {
      hour: '2-digit',
      minute: '2-digit'
   })}
   <h1 class="headline">BILL</h1>
   <div class="underline"></div>
   <div class="selected-items-container"></div>
   <div class="underline"></div>
   <span class="total-price-wrapper">
      <p>Total due: </p>
      <p></p>
   </span>
   <div class="underline"></div>
   <p>Thank you for your order!</p>
   `
   menuContainer.append(billContainer);
};

const handleAddingOrder=(e)=>{
   const selectedItemsContainer = document.querySelector('#menu .selected-items-container');
   const selectedFoodValue = data.find(element=>element.id===e.target.id);

   // Add ordered amount and amount due values
   !selectedFoodValue.orderedAmount?selectedFoodValue.orderedAmount=1:null;
   !selectedFoodValue.owedAmount?selectedFoodValue.owedAmount=selectedFoodValue.kaina:null;

   // Edit an existing bill item if it's already in there
   for(let element of selectedItemsContainer.children){
      if(element.id === selectedFoodValue.id){
         selectedItemsContainer.removeChild(element);
         selectedFoodValue.orderedAmount+=1;
         selectedFoodValue.owedAmount+=selectedFoodValue.kaina;
      }
   }

   // Create new bill item
   const selectedFoodElement = document.createElement('div');
   selectedFoodElement.classList.add('selected-item');
   selectedFoodElement.id=e.target.id;
   selectedFoodElement.innerText=selectedFoodValue.pavadinimas
      +"\nKiekis:"+selectedFoodValue.orderedAmount
      +"\nKaina:"+selectedFoodValue.owedAmount.toFixed(2)+"€";
   selectedItemsContainer.append(selectedFoodElement);

   // Create remove button
   {
      const removeElement = document.createElement('div');
      removeElement.classList.add('remove-button');
      removeElement.id=e.target.id;
      removeElement.innerHTML=
      `
      <?xml version="1.0" ?><svg style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><g id="delete"><path d="M18.9,8H5.1c-0.6,0-1.1,0.5-1,1.1l1.6,13.1c0.1,1,1,1.7,2,1.7h8.5c1,0,1.9-0.7,2-1.7l1.6-13.1C19.9,8.5,19.5,8,18.9,8z"/><path d="M20,2h-5l0,0c0-1.1-0.9-2-2-2h-2C9.9,0,9,0.9,9,2l0,0H4C2.9,2,2,2.9,2,4v1c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1V4    C22,2.9,21.1,2,20,2z"/></g></g></svg>
      `
      removeElement.addEventListener('click',e=>{
         const selectedElement = data.find(element=>element.id===e.target.id);
         for(let element of selectedItemsContainer.children){
            if(element.id === selectedElement.id){
               selectedElement.orderedAmount=undefined;
               selectedElement.owedAmount=undefined;
               selectedItemsContainer.removeChild(element);
               getTotalDue();
            }
         }
      });
      selectedFoodElement.append(removeElement);
   }

   // Total due
   const getTotalDue=()=>{
      let totalOwedAmount = 0;
      data.forEach(element=>{
         element.owedAmount?totalOwedAmount+=element.owedAmount:null;
      });
      document.querySelector('#menu .bill-container .total-price-wrapper p:nth-child(2)')
         .innerHTML=totalOwedAmount.toFixed(2)+"€";
   }
   getTotalDue();
}

createMenu();
createBill();