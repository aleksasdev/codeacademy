import React from 'react'
import { useContext } from 'react'
import {  OrdersContext } from './../../App';
import { Loading } from './../misc/Loading';
import { Order } from './Order';
import { nanoid } from 'nanoid';

export const Edit = () => {

   const ordersContext = useContext(OrdersContext);

   return (
      <section id="edit">
         {ordersContext.orders
         ?
            ordersContext.orders.map(entry => <Order key={nanoid()} data={entry} editable={true} />)            
         :
            <Loading />
         }
      </section>
   )
}