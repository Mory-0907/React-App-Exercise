import { useState } from "react";
import { GithubUser } from "./GitHubUser";

export function GithubUsers() {
  const [inputValue, setInputValue] = useState("");
  const [usernames, setUsernames] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setUsernames([...usernames, inputValue.trim()]);
      setInputValue("");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Search user Github"
          onChange={(e) => setInputValue(e.target.value)}
          className="border-1 ml-8 pl-3 p-1"
          required
        />
        <button type="submit" className="border-1 ml-8 p-1">
          Search users
        </button>
      </form>
      <ul>
        {usernames.map((username) => (
          <GithubUser key={username} username={username} />
        ))}
      </ul>
    </div>
  );
}
