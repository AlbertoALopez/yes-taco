import React from 'react';
import { Row, Grid, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import './styles.scss';

const Dialog = props => (
      <Col lg={12} xs={12}>
        <Row center="lg" center="xs">
          <div id={props.transitionId} className="dialog-container">
            <p className="dialog-text">{props.dialogText}</p>
            {props.children}
          </div>
        </Row>
      </Col>
);

Dialog.propTypes = {
  dialogText: PropTypes.string.isRequired,
  children: PropTypes.node,
  transitionId: PropTypes.string,
};

Dialog.defaultProps = {
  children: null,
  transitionId: 'main-intro-dialog',
};

export default Dialog;
