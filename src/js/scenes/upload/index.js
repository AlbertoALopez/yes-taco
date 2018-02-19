import React, { Component } from 'react';
import Dialog from '../../components/dialog';
import { Col, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { uploadImage } from '../../services/uploadImage/actions.js';
import './styles.scss';

import PictureInput from './pictureInput';


class Upload extends Component {
  static propTypes = {
    uploadToFirebase: PropTypes.func.isRequired,
  }

  uploadToFirebase = (file) => {
    this.props.uploadToFirebase(file);
  }

  render() {
    return (
      <div className="upload-container">
        <Col xs={12}>
          <Row center="xs">
            <Dialog>
              <PictureInput uploadToFirebase={this.uploadToFirebase} />
            </Dialog>
          </Row>
        </Col>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  uploadToFirebase: file => dispatch(uploadImage(file)),
});

const mapStateToProps = state => ({ isFetching: state.imageUpload.isFetching });


export default connect(mapStateToProps, mapDispatchToProps)(Upload);
