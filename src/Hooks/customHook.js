import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url, params, headers) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const options = {
        method: 'GET',
        url,
        params,
        headers
      };
      
      try {
        const response = await axios.request(options);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, params, headers]);

  return { data, isLoading, error };
};

export default useFetchData;
