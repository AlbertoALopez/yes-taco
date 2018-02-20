import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';
import { withRouter } from 'react-router-dom';
import IconButton from '../../components/iconButton';
import Dialog from '../../components/dialog';
import ResultsList from './resultsList';
import Confetti from './confetti';

import { resetImageCache } from '../../services/cloudDetection/actions.js';

import './styles.scss';


const isTacoInImageArray = array => array.find(label => label.description === 'taco');

export class Results extends Component {
  static propTypes = {
    imageLabels: PropTypes.array,
    file: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    resetImageCache: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // If no file has been uploaded
    if (this.props.file === null) {
      this.props.history.push('/upload');
    }
  }

  clickHandler = () => {
    this.props.resetImageCache();
    this.props.history.push('/upload');
  }


  render() {
    const tacoImageObject = isTacoInImageArray(this.props.imageLabels) || null;

    return (
      <div className="results-container">
        <Col xs={12}>
          <Row center="xs">
            <Dialog>
                {
                  tacoImageObject !== null ?
                    <div className="match-container">
                      <h3>Yes Taco!</h3>
                      <IconButton clickHandler={this.clickHandler}>
                        Start Again
                      </IconButton>
                      <Confetti />
                    </div>
                  :
                    <div className="match-container">
                      <h3>No tacos found. These were other matches for your image</h3>
                      <IconButton clickHandler={this.clickHandler}>
                        Start Again
                      </IconButton>
                      <ResultsList imageLabels={this.props.imageLabels} />
                    </div>
                }
            </Dialog>
          </Row>
        </Col>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  imageLabels: state.cloudDetection.detectedImageLabels,
  file: state.imageUpload.file,
});

const mapDispatchToProps = dispatch => ({ resetImageCache: () => dispatch(resetImageCache()) });

// Create HOC for react router
const ResultsWithRouter = ({ history }) => (Results.render);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Results));
