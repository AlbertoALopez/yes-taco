import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '../../components/dialog';
import { Col, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import IconButton from '../../components/iconButton';

import './styles.scss';


export class Loading extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // If no file has been uploaded
    if (!this.props.file) {
      this.props.history.push('/upload');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.detectedImageLabels.length !== 0) {
      setTimeout(() => this.props.history.push('/results'), 1500);
    }
  }

  render() {
    return (
      <div className="loading-container">
        <Col xs={12}>
          <Row center="xs">
            <Dialog>
              {
                this.props.uploadingImage || this.props.detectingImage ?
                  <div>
                    <div className="loader" />
                    <p>Please wait, uploading image and checking for tacos.</p>
                  </div>
                :
                  this.props.uploadErrorMessage || this.props.detectImageError ?
                    <div className="loading-error">
                      <p>Error detecting image :( Click below to try again.</p>
                      <IconButton type="check" clickHandler={() => this.props.history.push('/upload')} />
                    </div>
                  :
                    <div>
                      <p>Image uploaded. Let&apos;s see the results.</p>
                    </div>
              }
            </Dialog>
          </Row>
        </Col>
      </div>
    );
  }
}

Loading.propTypes = {
  detectedImageLabels: PropTypes.array,
  uploadingImage: PropTypes.bool.isRequired,
  uploadErrorMessage: PropTypes.string,
  detectingImage: PropTypes.bool.isRequired,
  detectImageError: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  file: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  uploadingImage: state.imageUpload.isFetching,
  uploadErrorMessage: state.imageUpload.errorMessage,
  detectingImage: state.cloudDetection.isFetching,
  detectImageError: state.cloudDetection.errorMessage,
  detectedImageLabels: state.cloudDetection.detectedImageLabels,
  file: state.imageUpload.file,
});

// HOC to access browser history
const LoadingWithRouter = ({ history }) => (Loading);

export default connect(mapStateToProps, null)(withRouter(Loading));
