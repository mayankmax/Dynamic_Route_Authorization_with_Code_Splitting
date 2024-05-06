import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import axios from "axios";

const Navbar = () => {

  

  
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
    

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
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    };

  return (
    <nav>
      <ul>
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"/matches"}>Matches</Link>
        </li>
        <li>
          <Link to={"/live"}>Live</Link>
        </li>
        <li>
          <Link to={"/score"}>Scores</Link>
        </li>
        <li>
          Settings
          <ul>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/signup"}>Signup</Link>
            </li>
            {/* Uncomment below lines if needed */}
            {/* <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link to={"/logout"}>Logout</Link>
            </li> */}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
