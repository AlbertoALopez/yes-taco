import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import cloudDetectionReducer from './services/cloudDetection/reducers.js';
import imageUploadReducer from './services/imageUpload/reducers.js';

export default function configureStore() {

  const reducer = combineReducers({
    cloudDetectionReducer,
    imageUploadReducer,
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
}
