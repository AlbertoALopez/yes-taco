import React from 'react';
import { Row, Grid, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import './styles.scss';

const Dialog = props => (
  <div className="dialog-container">
    <p className="dialog-text">{props.dialogText}</p>
      {props.children}
  </div>
);

Dialog.propTypes = {
  dialogText: PropTypes.string,
  children: PropTypes.node,
};

Dialog.defaultProps = {
  children: null,
};

export default Dialog;
