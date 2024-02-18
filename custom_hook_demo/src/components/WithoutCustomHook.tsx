import { useEffect, useState } from "react";
import { TodoDetail } from "../models/TodoObjects";

function WithoutCustomHook() {
  const [todos, setTodos] = useState<TodoDetail[]>([]);

  const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetch(TODOS_URL)
      .then((res) => res.json())
      .then((res: TodoDetail[]) => setTodos(res))
      .catch((ex) => console.log("Something wrong:", ex));
  }, []);

  return (
    <div>
      <p>This is without custom hook</p>
      <br />
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            return (
              <tr key={index}>
                <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default WithoutCustomHook;
