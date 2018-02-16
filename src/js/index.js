import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// import App from './components/App';
import Main from './scenes/main';

import '../style/index.scss';


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Main);

// Webpack HMR
if (module.hot) {
  module.hot.accept('./scenes/main', () => {
    render(Main);
  });
}
