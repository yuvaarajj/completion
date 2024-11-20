import { useState } from "react";

const List = props => {
  const { items } = props;

change = (item, event) =>{
let [allitems, setallitems] = useState([])
let newitem = {item}
setallitems([...allitems, newitem])
}

  return (
    <ul>
      {props.items.map((each) => (
        <li>{each} <button onChange={change} bought={{(allitems.includes(each)) ? style={backgroundcolor= "red"} : style={backgroundcolor= ""}}}  type="submit">Buy</button> </li>
      ))}
    </ul>
  );
};

export default List;
