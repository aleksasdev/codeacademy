import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Add } from './components/pages/Add';
import { Home } from './components/pages/Home';
import { Edit } from './components/pages/Edit';
import "./components/common.css";
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const OrdersContext = createContext();
export const DATABASE_URL = "https://believed-shore-vanadium.glitch.me/";

function App() {

   const [orders, setOrders] = useState(null);

   async function load(){
      const data = await fetch(DATABASE_URL)
         .then(res => res.json());
      setOrders(data);
   }

   useEffect(()=>{
      load();
   }, [])

   return (
      <div className="App">
         <Navbar />
         
         <OrdersContext.Provider value={{
               orders: orders,
               setOrders: setOrders
         }}>
            <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/add" element={<Add />}/>
                  <Route path="/edit" element={<Edit />}/>
            </Routes>
         </OrdersContext.Provider>
      </div>
   );
}

export default App;
