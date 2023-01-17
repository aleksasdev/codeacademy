import { useState } from "react";
import "./components/main/common.css";
import { Navbar } from "./components/main/Navbar";
import { Footer } from "./components/main/Footer";

function App() {

   const [currentTab, setCurrentTab] = useState();
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   return (
      <div className="App">
         <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} isLoggedIn={isLoggedIn} />
         {currentTab}
         <Footer />
      </div>
   );
}

export default App;
