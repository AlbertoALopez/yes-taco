import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './styles.scss';


const AppHeader = props => (
  <Row>
    <Col id="header-container" lg={12}>
      <div id="intro-title">YES TACO</div>
    </Col>
  </Row>
);

export default AppHeader;
