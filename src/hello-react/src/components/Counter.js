import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const onCountUp = () => {
    setCount(count + 1);
  }
  const onCountDown = () => {
    setCount(count - 1);
  }

  return (
    <>
      <p>Current Count: {count}</p>
      <button onClick={onCountUp}>+</button>
      <button onClick={onCountDown}>-</button>
    </>
  );
}

export default Counter;