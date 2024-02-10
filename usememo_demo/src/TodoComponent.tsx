import React, { useMemo, useState } from "react";

function TodoComponent() {
  const [todos, setTodos] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  //const expensiveOperationResult = expensiveOperation();

  const expensiveOperationResult = useMemo(() => expensiveOperation(), []);

  const addTodo = () => {
    setTodos((previousTodos) => [...previousTodos, "New Todo"]);
  };

  const incrementCount = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrementCount = () => {
    setCount((previousCount) => previousCount - 1);
  };

  //without
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
  for (let i = 1; i <= 1000000000000000; i++) {
    count += i;
  }
  return count;
};

export default TodoComponent;
