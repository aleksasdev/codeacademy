import { useState } from "react";
import "./components/main/common.css";
import { Navbar } from "./components/main/Navbar";
import { Footer } from "./components/main/Footer";

export const USERS_PATH = "http://localhost:5000/users";
export const MESSAGES_PATH = "http://localhost:5000/messages";

function App() {

   const [currentTab, setCurrentTab] = useState();
   const [user, setUser] = useState(null);

   return (
      <div className="App">
         <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} user={user} setUser={setUser} />
         {currentTab}
         <Footer />
      </div>
   );
}

export default App;
