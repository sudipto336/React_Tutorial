import { useState } from "react";
import Child from "./Child";
import Modal from "./Modal";

function Parent() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div onClick={handleClick}>
      <p>Count: {count}</p>
      <Modal>
        <Child />
      </Modal>
    </div>
  );
}

export default Parent;
