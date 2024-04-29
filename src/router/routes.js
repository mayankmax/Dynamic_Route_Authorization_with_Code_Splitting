import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard.jsx"));
const Live = React.lazy(() => import("../pages/Live/live.jsx"));
const Scores = React.lazy(() => import("../pages/Scores/score.jsx"));
const Match = React.lazy(() => import("../pages/Matches/matches.jsx"));
const Login = React.lazy(() => import("../components/Register/authform.jsx"));
const Signup = React.lazy(() => import("../components/Register/signup.jsx"));

let routes = {
  default: [
    {
      path: "/",
      element: <Navigate to="/Dashboard" />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
    {
      path: "/Live",
      element: <Live />,
    },
    {
      path: "/Score",
      element: <Scores />,
    },
    {
      path: "/Matches",
      element: <Match />,
    },
  ],
  auth: [
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Signup",
      element: <Signup />,
    },
  ],
};

export default routes;
