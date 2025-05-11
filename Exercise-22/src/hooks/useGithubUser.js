import useSWR from "swr";

function useGithubUser(username) {
  const shouldFetch = Boolean(username);
  const { data, error, isLoading, mutate } = useSWR(
    shouldFetch ? `https://api.github.com/users/${username}` : null
  );

  const refetch = () => {
    if (shouldFetch) mutate();
  };

  return {
    user: data,
    error,
    loading: isLoading,
    refetch
  };
}

export default useGithubUser;
