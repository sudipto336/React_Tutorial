import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoComponent from "./TodoComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>useMemo Demo</h1>
      <TodoComponent />
    </>
  );
}

export default App;
