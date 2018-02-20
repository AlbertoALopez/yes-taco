import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';

import Dialog from '../../components/dialog';
import ResultsList from './resultsList';

import './styles.scss';


const isTacoInImageArray = array => array.find(label => label.description === 'taco');

const Results = props => {
  const tacoImageObject = isTacoInImageArray(props.imageLabels);

  return (
    <div className="results-container">
      <Col xs={12}>
        <Row center="xs">
          <Dialog>
              {
                tacoImageObject.description ?
                  <div className="match-container">
                    <h3>{Math.round(tacoImageObject.score * 100)}% match for a taco!</h3>
                    <h4>Click the button above to start again</h4>
                    <p>These were other matches for your image:</p>
                  </div>
                :
                  <div className="match-container">
                    <p>No tacos found. These were other matches for your image:</p>
                  </div>
              }
            <ResultsList imageLabels={props.imageLabels} />
          </Dialog>
        </Row>
      </Col>
    </div>
  );
};

Results.propTypes = {
  imageLabels: PropTypes.array,
};


const mapStateToProps = state => ({
  imageLabels: state.cloudDetection.detectedImageLabels,
});

export default connect(mapStateToProps, null)(Results);
