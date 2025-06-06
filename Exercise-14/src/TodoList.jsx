import { useState } from "react";

export function TodoList({list}) {
  const [todos, setTodos] = useState(list);
  const [inputValue, setInputValue] = useState("");

  const aggiungi = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const reset = () => {
    setTodos([]);
  };

  const remove = (position) => {
    setTodos(todos.filter((_, index) => index !== position));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Scrivi qualcosa..."
      />
      <button onClick={aggiungi}>Aggiungi</button>
      <button onClick={reset}>Reset</button>

      <ul>
        {todos.map((value, index) => (
          <li key={index}>
            {value}
            <button onClick={() => remove(index)}>Rimuovi</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
