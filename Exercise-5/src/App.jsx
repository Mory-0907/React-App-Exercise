import AlertClock from "./AlertClock";

function visualizzaOra() {
  const date = new Date();
  alert(date.toLocaleTimeString());
}

function App() {
  return (
    <>
      <div>
        <AlertClock callback={visualizzaOra} label="Pippo"/>
      </div>
    </>
  );
}

export default App;
