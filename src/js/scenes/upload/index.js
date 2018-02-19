import React from 'react';
import Dialog from '../../components/dialog';
import { Col, Row } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import './styles.scss';


const Upload = props => (
  <div className="upload-container">
    <Col lg={12} xs={12}>
      <Row center="xs">
        <Dialog
          transitionId=""
          dialogText="This is where you upload"
        />
      </Row>
    </Col>
  </div>
);

export default Upload;
