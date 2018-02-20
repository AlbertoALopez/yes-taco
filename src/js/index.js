import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './scenes';

import configureStore from './configureStore';

import '../style/index.scss';


const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);
