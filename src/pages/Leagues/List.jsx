import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Main from '../../components/main.jsx'; // Assuming the correct path to the Main component
import Dashboard from '../Dashboard/Dashboard.jsx';

export default function List() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

    const dummyData = [
    { id: 1, column1: 'Data 1', column2: 'Data 2', column3: 'Data 3' },
    { id: 2, column1: 'Data 4', column2: 'Data 5', column3: 'Data 6' },
    { id: 3, column1: 'Data 7', column2: 'Data 8', column3: 'Data 9' },
  ];

  const fetchData = async () => {
    setIsLoading(true);
    const options = {
        method: 'GET',
        url: 'https://livescore6.p.rapidapi.com/leagues/v2/list',
        params: {Category: 'cricket'},
      headers: {
        'X-RapidAPI-Key': '5aa3b180f9mshc61d712f4525395p182841jsn700408cba792',
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
      {/* {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && !data && <p>No data available</p>} */}
      <Dashboard>
      {data ? <Main dummyData={data} /> : <Main dummyData={dummyData} />}
      </Dashboard>
    </div>
  );
}
