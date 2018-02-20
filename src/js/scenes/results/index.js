import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';

import Dialog from '../../components/dialog';
import ResultsList from './resultsList';
import Confetti from './confetti';

import './styles.scss';


const isTacoInImageArray = array => array.find(label => label.description === 'taco');

export const Results = props => {
  const tacoImageObject = isTacoInImageArray(props.imageLabels) || null;

  return (
    <div className="results-container">
      <Col xs={12}>
        <Row center="xs">
          <Dialog>
              {
                tacoImageObject !== null ?
                  <div>
                    <h3>Yes Taco!</h3>
                    <Confetti />
                  </div>
                :
                  <div className="match-container">
                    <h3>No tacos found. These were other matches for your image</h3>
                    <ResultsList imageLabels={props.imageLabels} />
                  </div>
              }
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
