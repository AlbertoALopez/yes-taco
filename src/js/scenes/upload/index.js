import React from 'react';
import Dialog from '../../components/dialog';
import { Col, Row } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import './styles.scss';

import PictureInput from './pictureInput';


const Upload = props => (
  <div className="upload-container">
    <Col xs={12}>
      <Row center="xs">
        <Dialog>
          <PictureInput />
        </Dialog>
      </Row>
    </Col>
  </div>
);

export default Upload;
