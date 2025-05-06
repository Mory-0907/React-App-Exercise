import { useCounter } from "./hooks/useCounter";

function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
      <div className="text-center mt-10">
        <h3 className="text-2xl font-bold">Contatore: {count}</h3>

        <div className="flex justify-center gap-4 mt-4">
          <button onClick={increment} className="border-1 w-[40px]">
            +
          </button>
          <button onClick={decrement} className="border-1 w-[40px]">
            -
          </button>
          <button onClick={reset} className="border-1 w-[40px]">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
