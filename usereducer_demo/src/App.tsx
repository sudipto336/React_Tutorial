import { useReducer } from "react";
import "./App.css";
import { TodoAction, TodoDetail } from "./TodosObjects";

function App() {
  const initialTodos: TodoDetail[] = [
    {
      id: 1,
      name: "Todo 1",
      isCompleted: false,
    },
    {
      id: 2,
      name: "Todo 2",
      isCompleted: false,
    },
  ];

  const todoReducer = function (
    state: TodoDetail[],
    action: TodoAction
  ): TodoDetail[] {
    switch (action.type) {
      case "COMPLETED":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, isCompleted: true };
          } else {
            return todo;
          }
        });
      case "NOT COMPLETED":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, isCompleted: false };
          } else {
            return todo;
          }
        });
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const handleComplete = (todo: TodoDetail, event: any) => {
    dispatch({
      type: event.target.checked ? "COMPLETED" : "NOT COMPLETED",
      id: todo.id,
    });
  };

  return (
    <>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={(e) => handleComplete(todo, e)}
              />
              {todo.name}
            </label>
          </div>
        );
      })}
      <br />
      <p>Completed Todos List:</p>
      {todos.map((todo, index) => {
        if (todo.isCompleted) {
          return (
            <div key={index}>
              <label>{todo.name}</label>
            </div>
          );
        }
      })}
    </>
  );
}

export default App;
