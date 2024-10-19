import Title from "../components/title";
import Addtodo from "../components/addtodo";
import TodoItems from "./todoitems";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  { name: "milk", date: "02-02-2002" },
  { name: "salt", date: "02-04-2002" },
  { name: "sugar", date: "02-06-2002" },
];



function App() {
  return (
    <div>
      <Title></Title>
      <Addtodo></Addtodo>
      <TodoItems data={data}></TodoItems>
    </div>
  );
}

export default App;
