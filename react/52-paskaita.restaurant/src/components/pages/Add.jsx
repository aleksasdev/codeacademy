import React from 'react'
import { useContext } from 'react';
import { DATABASE_URL } from '../../App'
import { OrdersContext } from './../../App';

export const Add = () => {

   const ordersContext = useContext(OrdersContext);

   function send(e){
      e.preventDefault();

      const [people, price] = e.target.elements

      const data = {
         people: people.value,
         price: price.value
      }

      fetch(DATABASE_URL, {
         method: "POST",
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      })

      ordersContext.setOrders(current => [...current, data]);
      e.target.reset();
   }

   return (
      <section id="add">
         <form action="" onSubmit={send}>
            <label htmlFor="">
               How many people?
               <input className="input-style" type="text" placeholder="Count" required />
            </label>
            <label htmlFor="">
               Price?
               <input className="input-style" type="text" placeholder="Price" required />
            </label>
            <input className="button-style" type="submit" value="Submit" />
         </form>
      </section>
   )
}
