import { useCallback, useState } from "react";
import "./App.css";
import TodosComponent from "./TodosComponent";

function App() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);

  //without useCallback

  //const addTodo = () => {
  //  setTodos((previousTodos) => {
  //    return [...previousTodos, "New Todo"];
  //  });
  //};

  //with usecallback

  const addTodo = useCallback(() => {
    setTodos((previousTodos) => {
      return [...previousTodos, "New Todo"];
    });
  }, [todos]);

  const incrementCount = () => {
    setCount((previousCount) => {
      return previousCount + 1;
    });
  };

  const decrementCount = () => {
    setCount((previousCount) => {
      return previousCount - 1;
    });
  };

  return (
    <>
      <h1>useCallback Demo</h1>
      <TodosComponent todos={todos} addTodo={addTodo} />
      <br />
      <br />
      <button onClick={incrementCount}>+</button>
      Count: {count}
      <button onClick={decrementCount}>-</button>
    </>
  );
}

export default App;
