import React from 'react';
import Dashboard from '../pages/Dashboard/Dashboard';

const Main = ({ dummyData }) => {
  return (
    <>
   
    <div className="dashboard-main">
      <div className='dashboard-main-container'>
        <div className='dashboard-main-header'>
          <p>Topic</p>
        </div>
        <div className='dashboard-main-display'>
          {dummyData.length === 0 ? (
            <p>No data available</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                  {/* Add more column headers if needed */}
                </tr>
              </thead>
              <tbody>
                {dummyData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.column1}</td>
                    <td>{row.column2}</td>
                    <td>{row.column3}</td>
                    {/* Add more columns here if needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Main;
