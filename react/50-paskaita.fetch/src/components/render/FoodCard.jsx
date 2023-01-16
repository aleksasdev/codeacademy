import React from 'react'
import { DATA_PATH } from '../../App';
import "./foodCard.css"

export const FoodCard = (props) => {

   function handleDeletion(e){

      // Delete locally
      props.setData(current => current.filter(entry =>
         props.data.id !== entry.id
      ));

      // Delete on json server
      fetch(`${DATA_PATH}/${props.data.id}`, {
         method: "DELETE",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		}})
         .then(res => res.json())
         .then((data) => {console.log(`Success! ${data}`)})
         .catch((error) => {console.log(`Error! ${error}`)});
   }

   function editTile(e){
      props.data.name = e.target.innerText;
      editDone();
   }

   function editQuantity(e){
      props.data.quantity = e.target.innerText;
      editDone();
   }

   function editType(e){
      props.data.type = e.target.innerText;
      editDone();
   }

   function editDone(){
      fetch(`${DATA_PATH}/${props.data.id}`, {
         method: "PUT",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		   },
         body: JSON.stringify(props.data)
      })
         .then(res => res.json())
         .then((data) => {console.log(`Success! ${data}`)})
         .catch((error) => {console.log(`Error! ${error}`)});
   }

   return (
      <div className="food-card" spellCheck="false">
         <h1 className='title' onInput={editTile} contentEditable>{props.data.name}</h1>
         <img src={props.data.image} alt="food" />
         <div className="description">
            <span>
               <p>Quantity:</p>
               <p className='quantity' onInput={editQuantity} contentEditable>{props.data.quantity}</p>
            </span>
            <span>
               <p>Type:</p>
               <p className='type' onInput={editType} contentEditable>{props.data.type}</p>
            </span>
         </div>
         <button className="delete" onClick={handleDeletion} >Delete</button>
      </div>
   )
}
