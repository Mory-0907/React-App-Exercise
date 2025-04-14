import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ start = 0 }) {
  const [counter, setCount] = useState(start);
  const [decrease, setDecrease] = useState(start);
  const [reset, setReset] = useState(start);

  return (
    <div>
       <CounterDisplay counter={counter}/> 
      <button onClick={() => setCount((counter) => counter + 1)}>
        count is {counter}
      </button>
      <button onClick={() => setDecrease((decrease) => decrease - 1)}>
        count is {decrease}
      </button>
      <button onClick={() => setReset((reset) => reset === start)}>
        count is {reset}
      </button>
    </div>
  );
}

export default Counter;

/*Quando chiamo setCounter, se stai basando il nuovo valore su quello precedente si dovrebbe usare una funzione. 
Questo assicura che stiamo lavorando sempre con l'ultimo valore aggiornato dello stato.
Se invece il nuovo valore è indipendente dal precedente si può usare direttamente il valore immediato.*/
