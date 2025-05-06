import Counter from "./counter";
import Welcome from "./welcome";
import ShowGithubUser from "./ShowGithubUser";
import GithubUsers from "./GithubUsers";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">SALUTO</Link></li>
          <li><Link to="/Counter">CONTO</Link></li>
          <li><Link to="/users">UTENTE</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Morena" />} />
        <Route path="/counter" element={<Counter />} />
        
        <Route path="/users" element={<GithubUsers />}>
          <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>

        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
