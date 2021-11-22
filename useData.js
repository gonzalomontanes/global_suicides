import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/mnalk/b8906554ab13bde5edd258a9af28c4de/raw/437676a393b62c8914944416922fb3ee66eed562/sus.csv';

const row = d => {
  d.coords = d['Location_Coordinates'].split(',').map(d => +d).reverse();
  d['suicides_no'] = + d['suicides_no'];
  d['year'] = new Date(d['year']);
  return d;
};

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
