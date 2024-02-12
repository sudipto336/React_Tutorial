import { memo } from "react";

function TodosComponent({ todos, addTodo }) {
  console.log("Todos component rendered...");
  return (
    <>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <br /> 
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
}

export default memo(TodosComponent);
