import { useMemo, useState } from "react";

function TodoComponent() {
  const [todos, setTodos] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  //without useMemo - expensiveOperation() will be called on each render of this component (adding todo or increment/decrement counter) - degrades performance
  //const expensiveOperationResult = expensiveOperation();

  //with useMemo with blank dependency array - expensiveOperation() will be called only on 1st render
  //const expensiveOperationResult = useMemo(() => expensiveOperation(), []);

  //with useMemo with dependency array - expensiveOperation() will be called only when dependency changes value
  const expensiveOperationResult = useMemo(() => expensiveOperation(), [count]);

  const addTodo = () => {
    setTodos((previousTodos) => [...previousTodos, "New Todo"]);
  };

  const incrementCount = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrementCount = () => {
    setCount((previousCount) => previousCount - 1);
  };


  return (
    <div>
      <div>
        <h1>Todos</h1>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <br />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <br />
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
      <br />
      <p>Expensive operation result: {expensiveOperationResult}</p>
    </div>
  );
}

const expensiveOperation = () => {
  let count = 0;
  for (let i = 1; i <= 100000; i++) {
    count += i;
  }
  console.log("calculated..");
  return count;
};

export default TodoComponent;
