import { useState } from "react";
import "./components/main/common.css";
import { Navbar } from "./components/main/Navbar";
import { Footer } from "./components/main/Footer";

export const DATABASE_PATH = "http://localhost:5000/users"

function App() {

   const [currentTab, setCurrentTab] = useState();
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   return (
      <div className="App">
         <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
         {currentTab}
         <Footer />
      </div>
   );
}

export default App;
