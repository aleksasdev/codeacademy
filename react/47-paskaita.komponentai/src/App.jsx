import "./task/styles/common.css";
import { List } from "./components/List";
import { Header } from "./task/components/header/Header";
import { nanoid } from 'nanoid';
import { Portfolio } from "./task/components/body/Portfolio";

function App() {
  return (
    <>
      {/* <List data={["Lolmanas", "Lelmanas", "ongManas"]} /> */}
      <Header key={nanoid()} />
      <Portfolio key={nanoid()} />
    </>
  );
}

export default App;
