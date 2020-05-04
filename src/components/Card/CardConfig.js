import React, { useState, useEffect } from 'react';
import { fetchTotalData } from '../../api/india';
import CountUp from 'react-countup';
import OriginalCard from './OriginalCard';

const Card = () => {
  const [totalData, setTotalData] = useState({
    totalCases: [],
  });

  const { totalCases } = totalData;

  useEffect(() => {
    const fetchTotalDataAPI = async () => {
      const data = await fetchTotalData();
      console.log(data);
      setTotalData({ ...totalData, totalCases: data });
      // console.log(totalCases);
    };
    fetchTotalDataAPI();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row text-center ml-5">
          {totalCases.map((cases) => {
            return <OriginalCard cases={cases} key={cases.statecode} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Card;
