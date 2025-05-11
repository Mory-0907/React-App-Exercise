import GithubSearch from "./GithubSearch";
import { SWRConfig } from "swr/_internal";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GithubSearch />
      </SWRConfig>
    </>
  );
}

export default App;
