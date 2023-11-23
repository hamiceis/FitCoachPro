import { useState, useEffect } from "react";
import axios from 'axios';

export function useFetch(url: string) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await axios.get(url);
        if (isMounted) {
          setData(response.data);
        }
      } catch (error: any) {
        if (isMounted) {
          setError(error.response?.data.message || 'Erro na solicitação');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return {
    data,
    error,
    loading
  };
}
