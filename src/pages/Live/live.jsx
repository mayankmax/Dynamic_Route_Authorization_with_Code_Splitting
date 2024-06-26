import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Main from '../../components/main.jsx'; // Assuming the correct path to the Main component

export default function Live() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const options = {
      method: 'GET',
      url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
      params: {
        Category: 'cricket',
        Timezone: '-7'
      },
      headers: {
        'X-RapidAPI-Key': '9edf6fcf80msh3153e99f84b1530p19a8d4jsncf0db3779c87',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && !data && <p>No data available</p>}
      {data && <Main dummyData={data} />}
    </div>
  );
}
