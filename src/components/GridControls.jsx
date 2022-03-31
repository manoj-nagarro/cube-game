import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const GridControls = (
  { refresh, setHeight, setWidth, width, height }) => (
  <div className="controls">
    <Row>
      <Col xs="12" className="item">
        <input
          type="text"
          min="5"
          max="1000"
          value={width}
          onChange={e => setWidth(e.target.value)}
        />
      </Col>
      <Col xs="12" className="item">
        <input
          type="text"
          min="5"
          max="1000"
          value={height}
          onChange={e => setHeight(e.target.value)}
        />
      </Col>
      <Col xs="2" className="item">
        <Button variant="primary" size="sm" className="btn" onClick={refresh}>Refresh</Button>
      </Col>
    </Row>
  </div>)

export default GridControls;