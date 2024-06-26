import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "../../components/main.jsx"; // Assuming the correct path to the Main component
import Dashboard from "../Dashboard/Dashboard.jsx";

export default function LeagueTable() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const dummyData = [
    { id: 1, column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { id: 2, column1: "Data 4", column2: "Data 5", column3: "Data 6" },
    { id: 3, column1: "Data 7", column2: "Data 8", column3: "Data 9" },
  ];

  const fetchData = async () => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/leagues/v2/get-table",
      params: {
        Category: "cricket",
        Ccd: "india",
        Scd: "indian premier league",
      },
      headers: {
        "X-RapidAPI-Key": "9edf6fcf80msh3153e99f84b1530p19a8d4jsncf0db3779c87",
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
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

      {data ? <Main dummyData={data} /> : <Main dummyData={dummyData} />}
    </div>
  );
}
