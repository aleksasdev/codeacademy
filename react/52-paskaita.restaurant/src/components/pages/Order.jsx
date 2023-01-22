import React from 'react'
import './pages.css';

export const Order = (props) => {

   return (
      <div id={props.data.id} className='order-card'>
         <h3>People</h3>
         <p>{props.data.people}</p>
         <h3>Price</h3>
         <p>{props.data.price}$</p>
      </div>
   )
}
