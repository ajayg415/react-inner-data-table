import React, { useState } from 'react';
import DataTable from "react-data-table-component";

import InnerTable from './InnerTable';

import MockData from '../MockData';

import './styles.css';

const DataGrid = () =>{
  const [data, setData] = useState(MockData);
  return (
    <div className='container'>
      {data.map((tData, i)=>{
        return <InnerTable tData={tData} key={i}/>;
      })}
    </div>
  );
};

export default DataGrid;