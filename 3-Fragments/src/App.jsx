import FoodItems from "./components/FoodItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = [
    "Sabzi",
    "Green Vegetable",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
  ];

  return (
    <>
      <h1  className="food-heading">Healthy Food</h1>
      <ErrorMessage item={foodItems} />
      <FoodItems item={foodItems} />
    </>
  );
}

export default App;