import React from 'react'
import { useContext } from 'react'
import { DATABASE_URL, OrdersContext } from './../../App';
import { useEffect } from 'react';
import { Loading } from './../misc/Loading';
import { Order } from './Order';
import { nanoid } from 'nanoid';

export const Home = () => {

   const ordersContext = useContext(OrdersContext);

   return (
      <section id="home">
         {ordersContext.orders
         ?
            ordersContext.orders.map(entry => <Order key={nanoid()} data={entry} />)            
         :
            <Loading />
         }
      </section>
   )
}
