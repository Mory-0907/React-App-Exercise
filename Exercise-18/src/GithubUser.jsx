import { useEffect, useState } from "react";

export function GithubUser({ username }) {
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
  return (
    <div className="flex flex-wrap gap-8 justify-center items-center mt-4">
      {data && <img src={data.avatar_url} className="w-[32px] rounded-2xl" />}
      {data && <h1>{data.name}</h1>}
      {data && <p>{data.login}</p>}
    </div>
  );
}
