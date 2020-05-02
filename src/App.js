import React, { useState, useEffect } from 'react';
import Card from './components/Card/Card';
import StateTable from './components/StateTable/StateTable';
import Axios from 'axios';
import './components/StateTable/style.css';

const App = () => {
  const [data, setData] = useState({
    allStates: [],
    loading: false,
  });

  const { allStates, loading } = data;
  const fetchAllData = async () => {
    const url = 'https://api.covid19india.org/data.json';
    const {
      data: { statewise },
    } = await Axios.get(url);
    //Removing the First Element Of An Array
    statewise.splice(0, 1);
    const ExtractedData = {
      statewise: statewise,
    };

    setData({ ...data, allStates: ExtractedData.statewise, loading: true });
    // console.log(statewise);
  };
  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className="App">
      <h1 className="heading">COVID19-INDIA</h1>

      <Card />

      <div className="container mt-2">
        <table className="table  table-bordered text-center table-hover">
          <thead>
            <tr>
              <th className="text-secondary">Country</th>
              <th className="text-danger">Confirmed</th>
              <th className="text-primary">Active</th>
              <th className="text-success">Recovered</th>
              <th className="text-secondary">Deaths</th>
            </tr>
          </thead>

          <tbody>
            {allStates.map((stateName) => {
              return <StateTable stateData={stateName} key={stateName.state} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
