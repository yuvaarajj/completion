import List from "./components/listitems";
import './App.css'

let App = () => {
  let listitems = ["Apples", "Bananas", "Oranges", "Grapes", "pineapple"];
  return (
    <div className="main">
      <h1 className="title">List Items</h1>
      <input className="input" type="text" />
      <ul className="list">
        <List items={listitems}></List>
      </ul>
    </div>
  );
};

export default App;
