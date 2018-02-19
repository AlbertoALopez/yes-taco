import React from 'react';
import Dialog from '../../components/dialog';
import { Link } from 'react-router-dom';
import './styles.scss';


const Upload = props => (
  <div className="upload-container">
    <Dialog
      transitionId=""
      dialogText="This is where you upload"
    />
  </div>
);

export default Upload;
