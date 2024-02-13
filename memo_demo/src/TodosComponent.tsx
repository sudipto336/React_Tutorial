import React, { memo } from "react";

function TodosComponent({ todos }) {
  console.log("TodosComponent rendered...");
  return (
    <>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </>
  );
}

//export default TodosComponent;
export default memo(TodosComponent);
