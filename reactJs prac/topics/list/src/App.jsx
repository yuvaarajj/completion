import List from "./components/listitems";
let App = () => {
  let listitems = ["Apples", "Bananas", "Oranges", "Grapes", "pineapple"];
  return (
    <>
      <h1>List Items</h1>
      <ul>

        <List items={listitems}></List>
      </ul>
    </>
  );
};

export default App;
