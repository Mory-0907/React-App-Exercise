import { useEffect, useState } from "react";
import { useGithubUser } from "../../Exercise-19/src/hooks/useGithubUser";

export function GithubUser({ username }) {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${username}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => {
  //       setData(json);
  //     })
  //     .catch((error) => console.error(`Errore nel fetch:`, error));
  // }, [username]);
  const data = useGithubUser(username)
  return (
    <div className="flex flex-wrap gap-8 justify-center items-center mt-4">
      {data && <img src={data.avatar_url} className="w-[34px] rounded-2xl" />}
      {data && <h1>{data.name}</h1>}
      {data && <p>{data.login}</p>}
    </div>
  );
}
