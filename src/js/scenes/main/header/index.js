import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './styles.scss';


const AppHeader = props => (
  <Row>
    <Col className="header-container" lg={12}>
      <div className="intro-title">YES TACO</div>
    </Col>
  </Row>
);

export default AppHeader;
