import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import '../style/index.scss';

export default ReactDOM.render(
  <App />,
  document.getElementById('root') || document.createElement('div'),
);
