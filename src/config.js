import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://livescore6.p.rapidapi.com/leagues/v2/list',
    params: {Category: 'soccer'},
    headers: {
      'X-RapidAPI-Key': '5aa3b180f9mshc61d712f4525395p182841jsn700408cba792',
      'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }