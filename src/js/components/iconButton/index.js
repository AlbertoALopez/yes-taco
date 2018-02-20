import React from 'react';
import PropTypes from 'prop-types';
import { MorphIcon } from 'react-svg-buttons';


const IconButton = props => (
  <MorphIcon type={props.type} size={props.size} />
);

IconButton.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
};

IconButton.defaultProps = {
  type: 'arrowRight',
  size: 30,
};

export default IconButton;
