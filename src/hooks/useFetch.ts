import { useState, useEffect } from "react";
import axios from 'axios';

interface FetchResult<T> {
  data: T | undefined;
  error: string | null;
  loading: boolean;
}

export function useFetch<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await axios.get<T>(url);
        if (isMounted) {
          setData(response.data);
          setError(null); // Limpar o erro em caso de sucesso
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

    if (url) {
      fetchData();
    }

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
