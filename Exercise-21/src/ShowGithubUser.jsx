import { useParams } from "react-router-dom";
import GithubUserList from "./GithubUserList";

const ShowGithubUser = () => {
  const { username } = useParams();

  return <GithubUserList username={username} />;
};

export default ShowGithubUser;
