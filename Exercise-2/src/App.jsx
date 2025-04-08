
import HelloWorld from "./HelloWorld";

function App() {
  return (
    <>
      <div>
        <HelloWorld />
      </div>
    </>
  );
}

export default App;

/*Si, si può ultilizzare Hello più di una volta nel componente App, nel caso in cui volessimo utilizzarlo n volte verrà visualizzato n volte. 
Si, si può eseguire il rendering del componente Message direttamente all'interno del componente App, il componente Message viene visualizzato*/

