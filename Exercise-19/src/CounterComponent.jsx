import { useCounter } from "./hooks/useCounter";

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="text-center mt-10">
      <h3 className="text-2xl font-bold">Contatore: {count}</h3>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={increment}
          className="bg-green-800 px-4 py-2 rounded text-white"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="bg-red-700 px-4 py-2 rounded text-white"
        >
          -
        </button>
        <button
          onClick={reset}
          className="bg-gray-400 px-4 py-2 rounded text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterComponent;