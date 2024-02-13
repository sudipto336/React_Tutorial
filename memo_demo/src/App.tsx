import { useState } from "react";
import "./App.css";
import TodosComponent from "./TodosComponent";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo1", "todo2"]);
  return (
    <>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        +
      </button>
      Count: {count}
      <button onClick={() => setCount((previousCount) => previousCount - 1)}>
        -
      </button>
      <br />
      <TodosComponent todos={todos} />
    </>
  );
}

export default App;
