import React, { useEffect, useState } from "react";

function WithoutDependency() {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  });
  return (
    <div>
      <p>useEffect without dependency array: </p>
      <p>Count: {count}</p>
    </div>
  );
}

export default WithoutDependency;
