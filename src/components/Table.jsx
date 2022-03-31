import React from 'react';
import Row from './Row.jsx';

const Table = ({ gridData }) => (
  <table>
    <tbody>
      {gridData.map((x, idx) => (
        <Row key={idx} data={x}/>
      ))}
    </tbody>
  </table>
)

export default Table;