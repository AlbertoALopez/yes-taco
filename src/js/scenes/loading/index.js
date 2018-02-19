import React, { Component } from 'react';
import Dialog from '../../components/dialog';
import { Col, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';

import './styles.scss';


const Loading = props => (
  <div className="loading-container">
    <Col xs={12}>
      <Row center="xs">
        <Dialog>
        {
          props.uploadingImage || props.detectingImage ?
            <div>
              <div className="loader" />
              <p>Please wait, uploading image and checking for tacos.</p>
            </div>
          :
            <p>Success!</p>
        }
        </Dialog>
      </Row>
    </Col>
  </div>
);

const mapStateToProps = state => ({
  uploadingImage: true,
  uploadErrorMessage: state.imageUpload.errorMessage,
  detectingImage: state.cloudDetection.isFetching,
  detectImageError: state.cloudDetection.errorMessage,
});

export default connect(mapStateToProps, null)(Loading);
