import { Color } from "./Color";
import { Colori } from "./Colori";

function App() {
  const listColors = [
    { id: "2", name: "rosso" },
    { id: "3", name: "nero" },
    { id: "4", name: "blue" },
    { id: "5", name: "giallo" },
  ];

  return (
    <>
      <Color color={{ id: 1, name: "Morena" }} />
      <Colori colori={listColors} />
    </>
  );
}

export default App;
