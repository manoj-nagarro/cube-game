import React from 'react';
import Cube from './Cube.jsx';
import '../styles.css'

const Row = ({ data }) => {
  const defaultClassNames = {
    ON: 'alive', OFF: 'dead'
  }
  return (
  <tr>
    {data && data.map((y, index) => {
      const status = y ? defaultClassNames.ON : defaultClassNames.OFF
      return (<Cube status={status} key={index}/>)
    })}
  </tr>)}

export default Row