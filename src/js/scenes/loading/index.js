import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '../../components/dialog';
import { Col, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import IconButton from '../../components/iconButton';

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
                <div>
                  <p>Error detecting image :( Click below to try again.</p>
                  <button className="icon-button" onClick={() => props.history.push('/upload')}>
                    <IconButton type="check" />
                  </button>
                </div>
              :
                <div>
                  <p>Image uploaded. Click below to see results.</p>
                  <button className="icon-button" onClick={() => props.history.push('/results')}>
                    <IconButton type="check" />
                  </button>
                </div>
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  uploadingImage: state.imageUpload.isFetching,
  uploadErrorMessage: state.imageUpload.errorMessage,
  detectingImage: state.cloudDetection.isFetching,
  detectImageError: state.cloudDetection.errorMessage,
});

// HOC to access browser history
const LoadingWithRouter = ({ history }) => (Loading);

export default connect(mapStateToProps, null)(withRouter(Loading));
