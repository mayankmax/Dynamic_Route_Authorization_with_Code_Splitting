import React, { lazy } from "react";
import { Navigate } from "react-router-dom";



const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard.jsx"));
const Live = React.lazy(() => import("../pages/Live/live.jsx"));
const Scores = React.lazy(() => import("../pages/Scores/score.jsx"));
const Match = React.lazy(() => import("../pages/Matches/matches.jsx"));
const Login = React.lazy(() => import("../components/Register/authform.jsx"));
const Signup = React.lazy(() => import("../components/Register/signup.jsx"));
const ListByLeague = React.lazy(() => import("../pages/Matches/list-by-league.jsx"));
const ListByDate = lazy(() => import("../pages/Matches/list-by-date.jsx"));
const LeagueTable = lazy(()=> import("../pages/Leagues/Table.jsx"))
const List = lazy(()=> import("../pages/Leagues/List.jsx"))

  const dummyData = [
    { id: 1, column1: 'Data 1', column2: 'Data 2', column3: 'Data 3' },
    { id: 2, column1: 'Data 4', column2: 'Data 5', column3: 'Data 6' },
    { id: 3, column1: 'Data 7', column2: 'Data 8', column3: 'Data 9' },
  ];

let routes = {
  default: [
    {
      path: "/",
      element: <Navigate to="/matches/listbydate" />,
    },
    // {
    //   path: "/Dashboard",
    //   element: <Dashboard dummydata={dummyData}/>,
    // },
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
  
  
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Signup",
      element: <Signup />,
    },
    
    {
      path:"/matches/listbyleague",
      element:<ListByLeague />
    },
    {
      path:"/matches/listbydate",
      element:<ListByDate />
    },
    {
      path:"/leagues/leaguelist",
      element: <List />
    },
    {
      path:"/leagues/leaguetable",
      element:<LeagueTable />
    }
  ],
};

export default routes;
