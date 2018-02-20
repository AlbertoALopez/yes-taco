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

// Conditional test for React hot module reload
// Listens for changes in source JS and merges them into active bundle
// Bug: forces refresh in browser when using react router
if (module.hot) {
  module.hot.accept('./scenes/main', () => {
    render(App);
  });
}
