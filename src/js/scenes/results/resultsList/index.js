import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import PropTypes from 'prop-types';

import './styles.scss';

const ResultsList = props => {
  const imageLabelData = props.imageLabels.map(label => (
    <li className="list-item" key={Math.random(label.score)}>
      <p>{Math.round(label.score * 100)}% chance this is a {label.description}.</p>
    </li>
  ));

  return (
    <div className="results-list-container">
      <ul className="results-list">
        {imageLabelData}
      </ul>
    </div>
  );
};

ResultsList.propTypes = {
  imageLabels: PropTypes.array,
};

export default ResultsList;
