
import CounterComponent from "./CounterComponent";
import FormComponent from "./FormComponent";
import GithubSearch from "./GithubSearch";
import LocationComponent from "./LocationComponent";

function App() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Custom hooks</h2>
      <CounterComponent />
      <hr className="my-6" />
      <GithubSearch />
      <hr className="my-6" />
      <FormComponent />
      <hr className="my-6" />
      <LocationComponent />
    </div>
  );
}

export default App;
