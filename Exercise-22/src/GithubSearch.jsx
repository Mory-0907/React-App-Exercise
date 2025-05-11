import useGithubUser from "./hooks/useGithubUser";
import { useState } from "react";

function GithubSearch() {
  const [username, setUsername] = useState();
  const { user, isLoading, isError } = useGithubUser(username);

  return (
    <div className="flex gap-2 mb-4 p-6">
      <input
        value={username}
        className="border px-2 py-1 rounded"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Inserisci username GitHub"
      />
      {isLoading && <p>Caricamento...</p>}
      {isError && <p className="text-red-500">Errore nel caricamento!</p>}
      {user && (
        <div className="flex items-center gap-4 p-4 border rounded">
          <img
            src={user.avatar_url}
            alt="Avatar"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl">{user.name || "Nome non disponibile"}</h2>
            <p className="text-gray-600">@{user.login}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GithubSearch;
