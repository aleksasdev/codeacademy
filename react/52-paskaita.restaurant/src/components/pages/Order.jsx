import React from 'react'
import { DATABASE_URL } from '../../App';
import './pages.css';
import { OrdersContext } from './../../App';
import { useContext } from 'react';

export const Order = (props) => {

   const ordersContext = useContext(OrdersContext);

   function handleDelete(){
      const filteredArray = ordersContext.orders.filter(entry => entry.id !== props.data.id);
      ordersContext.setOrders(filteredArray);

      fetch(`${DATABASE_URL}/${props.data.id}`, {
         method: "DELETE"
      })
   }

   return (
      <div id={props.data.id} className='order-card'>
         <h3>People</h3>
         <p>{props.data.people}</p>
         <h3>Price</h3>
         <p>{props.data.price}$</p>

         {props.editable &&
            <div className="button-style" onClick={handleDelete}>Delete</div>
         }
      </div>
   )
}
