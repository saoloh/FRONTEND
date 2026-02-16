### Real-Life Example: Personal Fitness Goals Tracker

Imagine you want to create a simple app to track your personal fitness goals, such as "Run 5 kilometers" or "Do yoga three times a week." This app will allow you to input your goals and the timeframe to achieve them.

#### Key Components:
1. **Goal Form**: A form to input your fitness goal and the timeframe.
2. **List of Goals**: A display of all the goals you have entered.

#### Code Example:

```javascript
import React, { useState } from 'react';

// Goal Form Component
function GoalForm({ onAdd }) {
  const [formData, setFormData] = useState({ goal: '', by: '' });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ goal: '', by: '' }); // Reset form
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="goal"
        placeholder="Enter your goal"
        value={formData.goal}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="by"
        placeholder="By when?"
        value={formData.by}
        onChange={changeHandler}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

// List of Goals Component
function GoalsList({ goals }) {
  return (
    <ul>
      {goals.map((goal, index) => (
        <li key={index}>
          {goal.goal} - {goal.by}
        </li>
      ))}
    </ul>
  );
}

// App Component
function App() {
  const [allGoals, setAllGoals] = useState([]);

  const addGoal = (goalEntry) => {
    setAllGoals((prevGoals) => [...prevGoals, goalEntry]);
  };

  return (
    <div>
      <h1>My Fitness Goals</h1>
      <GoalForm onAdd={addGoal} />
      <GoalsList goals={allGoals} />
    </div>
  );
}

export default App;
```

### Breakdown of the Example:
- **GoalForm Component**: 
  - Uses the `useState` hook to manage the form data.
  - The `changeHandler` updates the state based on user input.
  - The `submitHandler` calls the `onAdd` function passed as a prop to add the goal to the list and resets the form.

- **GoalsList Component**: 
  - Receives the list of goals as a prop and displays them in an unordered list.

- **App Component**: 
  - Manages the overall state of all goals and passes the `addGoal` function to the `GoalForm`.

### Relevance:
This example is relevant because it demonstrates how to apply the concepts of state management and event handling in a real-world application. By building a fitness goals tracker, you can see how the principles discussed in the lecture come to life, allowing you to create interactive and dynamic applications.

Feel free to ask if you have any questions or need further clarification! You're doing great!