import Item from "../components/item";
function TodoItems({ data }) {
  return (
    <div>
      {data.map(each => 
        <Item key={each.name} name={each.name} date={each.date} />
      )}
    </div>
  );
}

export default TodoItems;
