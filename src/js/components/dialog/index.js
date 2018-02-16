import React from 'react';
import { Row, Grid, Col } from 'react-flexbox-grid';
import './styles.scss';

const Dialog = () => (
      <Col lg={12} xs={12}>
        <Row center="lg" center="xs">
          <div id="dialog-container">
            <p>What have you got there? Is it a taco? Find out by uploading a picture or pointing us to a URL!</p>
          </div>
        </Row>
      </Col>
);

export default Dialog;
