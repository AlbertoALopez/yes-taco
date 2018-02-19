import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import cloudDetection from './services/cloudDetection/reducers.js';
import imageUpload from './services/uploadImage/reducers.js';

export default function configureStore() {

  const reducer = combineReducers({
    cloudDetection,
    imageUpload,
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
}
