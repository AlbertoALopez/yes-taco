import React from 'react';
import SvgIcon from '../../../components/svg';
import './styles.scss';

const SvgOverlay = props => (
  <div id="svg-overlay-container">
    <SvgIcon />
    {props.children}
  </div>
);

export default SvgOverlay;
