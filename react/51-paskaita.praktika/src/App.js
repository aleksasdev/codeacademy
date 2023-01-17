import { useState } from "react";

function App() {

  const [currentTab, setCurrentTab] = useState();

  return (
    <div className="App">
      {currentTab}
    </div>
  );
}

export default App;
