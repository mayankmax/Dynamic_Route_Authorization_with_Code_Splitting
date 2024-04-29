import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
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
