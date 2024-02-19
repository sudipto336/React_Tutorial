import { useEffect, useState } from "react";

function WithDependency() {
  const [number, setNumber] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setResult(number * multiplier);
    }, 1000);
  }, [number, multiplier]);

  const onNumberInput = (evt) => {
    setNumber(Number(evt.target.value));
  };

  const onMultiplierInput = (evt) => {
    setMultiplier(Number(evt.target.value));
  };

  return (
    <div>
      <p>useEffect with dependency array: </p>
      <div>
        Number:{" "}
        <input
          type="number"
          onInput={(evt) => onNumberInput(evt)}
          value={number}
        />
      </div>
      <div>
        Multiplier :{" "}
        <input type="number" onInput={onMultiplierInput} value={multiplier} />
      </div>
      <p>Result: {result}</p>
    </div>
  );
}

export default WithDependency;
