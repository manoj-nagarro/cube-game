import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import useActive from './hooks/useActive.js';
import useTicker from './hooks/useTicker.js';
import Table from './components/Table.jsx';
import GridControls from './components/GridControls.jsx';
import './styles.css';

function App() {
  const defaultWidth = 50;
  const defaultHeight = 50;
  const defaultTime = 1000; // time in miliseconds

  const [width, setWidth] = useState(defaultWidth);
  const [height, setHeight] = useState(defaultHeight);
  const { grid, refresh, nextStep } = useActive(width, height);
  useTicker(nextStep, defaultTime);

  return (
    <>
      <Container>
        <Row>
          <Col xs="4">
            <GridControls
              refresh={refresh}
              setHeight={setHeight}
              setWidth={setWidth}
              width={width}
              height={height}
            />
          </Col>
          <Col xs="8">
              <Table gridData={grid}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App
