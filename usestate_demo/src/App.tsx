import { useState } from "react";
import "./App.css";
import CarComponent from "./CarComponent";

function App() {
  const [count, setCount] = useState<number>(0);

  const increaseCount = (): void => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = (): void => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <button onClick={increaseCount}>+</button>
      Count: {count}
      <button onClick={decreaseCount}>-</button>
      <br />
      <CarComponent />
    </>
  );
}

export default App;
