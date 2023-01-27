import { Navbar } from './components/main/Navbar';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserProvider';

function App() {

   return (
      <>
         <Routes>
            <Route element={
               <UserProvider>
                  <Navbar />
               </UserProvider>
            }>
               
            </Route>
         </Routes>
      </>
   );
}

export default App;
