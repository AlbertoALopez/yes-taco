import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '../../components/dialog';
import { Col, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';

import './styles.scss';


export const Loading = props => (
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
              props.uploadErrorMessage || props.detectImageError ?
                <div><p>Error detecting image :( Please try again later</p></div>
              :
                <div><p>Success!</p></div>
          }
        </Dialog>
      </Row>
    </Col>
  </div>
);

Loading.propTypes = {
  uploadingImage: PropTypes.bool.isRequired,
  uploadErrorMessage: PropTypes.string,
  detectingImage: PropTypes.bool.isRequired,
  detectImageError: PropTypes.string,
};

const mapStateToProps = state => ({
  uploadingImage: state.imageUpload.isFetching,
  uploadErrorMessage: state.imageUpload.errorMessage,
  detectingImage: state.cloudDetection.isFetching,
  detectImageError: state.cloudDetection.errorMessage,
});

export default connect(mapStateToProps, null)(Loading);
