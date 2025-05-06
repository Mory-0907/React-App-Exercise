import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount((c) => c + 1);
  };

  const Decrease = () => {
    setCount((c) => c - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={Increment}>Incremento</button>
      <button onClick={Decrease}>Decremento</button>
      <button onClick={Reset}>Reset</button>
    </>
  );
};

export default Counter;
