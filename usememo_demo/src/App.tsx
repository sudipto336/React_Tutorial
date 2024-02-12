import { useState } from "react";
import "./App.css";
import TodosComponent from "./TodosComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>useMemo Demo</h1>
          <TodosComponent />
    </>
  );
}

export default App;
