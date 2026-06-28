import Item from "./Item";

const FoodItems = ({ item }) => {
  return (
    <ul className="list-group">
      {item.map((food) => (
        <Item key={food} food={food} />
      ))}
    </ul>
  );
};

export default FoodItems;