import Counter from "./Counter";
import FilteredList from "./FilteredList";

function App() {
  const sampleData = [
    { id: 1, name: "Morena", age: 21 },
    { id: 2, name: "Giovanni", age: 16 },
    { id: 3, name: "Mirko", age: 22 },
    { id: 4, name: "Alessia", age: 28 },
    { id: 5, name: "Silvia", age: 18 },
  ];
  return (
    <>
      <Counter />
      <hr className="my-6" />
      <h3 className="text-2xl font-bold">Filtered List</h3>
      <FilteredList list={sampleData} />
    </>
  );
}

export default App;
