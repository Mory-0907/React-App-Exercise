import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom"; 

const GithubUsers = () => {
const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      
      navigate(`/users/${username}`);
    }
  };

  return (
    <div>
      <h2>Utenti GitHub</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Inserisci un nome utente GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Vai al Profilo</button>
      </form>

      <Outlet />
    </div>
  )}


export default GithubUsers;