import { useState, useEffect } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(`Errore nel fetch:`, error));
  }, [username]);

  return data;
  
}
