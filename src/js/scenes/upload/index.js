import React, { Component } from 'react';
import Dialog from '../../components/dialog';
import { Col, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { uploadImage } from '../../services/uploadImage/actions.js';
import './styles.scss';

import PictureInput from './pictureInput';


export class Upload extends Component {
  static propTypes = {
    uploadToFirebase: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  uploadToFirebase = (file) => {
    this.props.uploadToFirebase(file);
  }

  transitionToLoading = () => this.props.history.push('/loading');

  render() {
    return (
      <div className="upload-container">
        <Col xs={12}>
          <Row center="xs">
            <Dialog>
              <PictureInput
                uploadToFirebase={this.uploadToFirebase}
                transitionToLoading={this.transitionToLoading}
              />
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


// Create HOC for react router
const UploadWithRouter = ({ history }) => (Upload.render());

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Upload));
