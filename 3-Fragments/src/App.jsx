import FoodItems from "./components/FoodItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

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
      <Container>
        <h1  className="food-heading">Healthy Food</h1>
      <ErrorMessage item={foodItems} />
      <FoodItems item={foodItems} />
      </Container>
      <Container>
        <p> Above is the list of Healthy foods that are good for your health and well being.</p>
      </Container>
      </>
    
  );
}

export default App;