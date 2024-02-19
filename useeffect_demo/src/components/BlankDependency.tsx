import React, { useEffect, useState } from "react";

function BlankDependency() {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);
  return (
    <div>
      <p>useEffect with blank dependency array: </p>
      <p>Count: {count}</p>
    </div>
  );
}

export default BlankDependency;
