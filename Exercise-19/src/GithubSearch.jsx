import { useState } from "react";
import { useGithubUser } from "./hooks/useGithubUser";

function GithubSearch() {
  const [input, setInput] = useState("");
  const { user, loading, error, fetchUser } = useGithubUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) fetchUser(input.trim());
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          className="border px-2 py-1 rounded"
          placeholder="Username GitHub"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 px-3 py-1 rounded text-white"
        >
          Cerca
        </button>
      </form>

      {loading && <p>Caricamento...</p>}
      {error && <p className="text-red-500">{error}</p>}
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