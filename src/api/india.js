import React from 'react';
import Axios from 'axios';

export const fetchTotalData = async () => {
  const url = 'https://api.covid19india.org/data.json';
  const {
    data: { statewise },
  } = await Axios.get(url);
  //Removing the First Element Of An Array
  statewise.splice(1);
  return statewise;
};
