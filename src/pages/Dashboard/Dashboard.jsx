import React, { useState } from 'react';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import Main from '../../components/main';

export default function Dashboard({ children }) {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidepanel">
        <div className="games">
          <p>Cricket</p>
          <p>Soccer</p>
          <p>Tennis</p>
        </div>
        <div className="categories">
          <div className="filter-section">
            <h3>Matches</h3>
            <p onClick={() => navigate("/matches/listbyleague")}>List by League</p>
            <p onClick={() => navigate("/matches/live")}>List Live</p>
            <p onClick={() => navigate("/matches/listbydate")}>List by Date</p>
          </div>
          <div className="filter-section">
            <h3>Leagues</h3>
            <p onClick={() => navigate('/leagues/leaguelist')}>Leagues List</p>
            <p onClick={() => navigate('/leagues/leaguetable')}>Leagues Table</p>
          </div>
          <div className="filter-section">
            <h3>News</h3>
            <p onClick={() => navigate('/news/v2/list')}>News List</p>
            <p onClick={() => navigate('/news/v2/list-by-sport')}>News by Sport</p>
            <p onClick={() => navigate('/news/v2/detail')}>News Detail</p>
          </div>
          <div className="filter-section">
            <h3>Competitions</h3>
            <p onClick={() => navigate('competitions/detail')}>Competitions Detail</p>
            <p onClick={() => navigate('competitions/get-table')}>Competitions Table</p>
            <p onClick={() => navigate('competitions/get-player-stats')}>Competitions Player Stats</p>
            <p onClick={() => navigate('competitions/get-team-stats')}>Competitions Team Stats</p>
          </div>
          <div className="filter-section">
            <h3>Teams</h3>
            <p onClick={() => navigate('teams/detail')}>Teams Detail</p>
            <p onClick={() => navigate('teams/get-table')}>Teams Table</p>
            <p onClick={() => navigate('teams/get-player-stats')}>Teams Player Stats</p>
            <p onClick={() => navigate('teams/get-team-stats')}>Teams Team Stats</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
