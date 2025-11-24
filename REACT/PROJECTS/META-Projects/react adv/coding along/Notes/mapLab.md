```javascript
import "./App.css";
import DessertsList from "./DessertsList";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
}

export default App;
```

```javascript
function DessertsList({desserts}) {
  // Implement the component here.
  let sortedFilteredDesert = desserts.filter((item) => {
    return item.calories < 500;
  }).sort((a, b) => { return a.calories - b.calories })
  return <ul>
    {sortedFilteredDesert.map((item) => {
      <li key={sortedFilteredDesert.name}>"{dessertName} - {sortedFilteredDesert.Calories} cal"</li>
    })}
  </ul>;
}

export default DessertsList;
```