const List = (props) => {
//   const { items } = props;
  return (
    <ul>
      {props.items.map((each) => (
        <li>{each}</li>
      ))}
    </ul>
  );
};

export default List;
