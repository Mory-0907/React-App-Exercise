import useSWR from "swr";

export function useGithubUser(username) {
  const shouldFetch = Boolean(username);
  const { data, error, loading, mutate } = useSWR(
    shouldFetch ? `https://api.github.com/users/${username}` : null
  );

  return {
    user: data,
    isLoading: loading,
    isError: error,
    refetch: mutate,
  };
}
