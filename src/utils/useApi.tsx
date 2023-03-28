import { useState } from 'react';

function useApi<T>(apiFunc) {
  const [data, setData] = useState<T | any>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isRequested, setIsRequested] = useState<boolean>(false);

  const request = async (...args) => {
    setLoading(true);
    setIsRequested(true);
    try {
      const result = await apiFunc(...args);
      setData(result);
    } catch (err: any) {
      setError(err.message || 'Unexpected Error!');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
    isRequested,
  };
}

export default useApi;
