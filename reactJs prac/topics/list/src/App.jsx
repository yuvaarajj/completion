import List from "./components/listitems";
import "./App.css";
import { useState } from "react";

function App () {
  let [listitems, setlistitems] = useState([

    "Apples", "Bananas", "Oranges", "Grapes", "pineapple"
  ])
  

 let addd = event => {
  if(event.key === "Enter"){
    let new_value = event.target.value
    let new_items = [...listitems, new_value]
    setlistitems(new_items)
    event.target.value = ""
  }
    
  };

  return (
    <div className="main">
      <h1 className="title">List Items</h1>
      <input onKeyDown={addd} className="input" type="text" />
      <ul className="list">
        <List items={listitems}></List>
      </ul>
    </div>
  );
};

export default App;
