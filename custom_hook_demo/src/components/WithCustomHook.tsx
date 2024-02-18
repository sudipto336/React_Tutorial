import { TodoDetail } from "../models/TodoObjects";
import useFetch from "../hooks/useFetch";

function WithCustomHook() {
  const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

  const [data] = useFetch(TODOS_URL);

  return (
    <div>
      <p>This is with custom hook</p>
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
          {data.map((todo: TodoDetail, index) => {
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

export default WithCustomHook;
