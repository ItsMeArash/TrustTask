import { useAxios } from "use-axios";

function useFetchApi() {
  const { data, error, loading } = useAxios("/products");

  if (loading) {
    return { data: null, error: null, loading: true };
  }

  if (error) {
    return { data: null, error, loading: false };
  }

  return { data, error: null, loading: false };
}

export default useFetchApi;
