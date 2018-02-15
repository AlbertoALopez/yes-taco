import React from 'react';
import ReactDOM from 'react-dom';

// import App from './components/App';
import Main from './scenes/main';

import '../style/index.scss';

export default ReactDOM.render(
  <Main />,
  document.getElementById('root') || document.createElement('div'),
);
