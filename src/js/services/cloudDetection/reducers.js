import {
  DETECT_IMAGE_START,
  DETECT_IMAGE_FAILURE,
  DETECT_IMAGE_SUCCESS,
  DETECT_IMAGE,
  RESET_IMAGE_CACHE,
} from './actions.js';

const initialState = {
  isFetching: false,
  errorMessage: null,
  detectedImageLabels: [],
};

export default function cloudDetectionReducer(state = initialState, action) {

  if (action.type === DETECT_IMAGE_START) {
    return {
      ...state,
      isFetching: true,
    };
  }

  else if (action.type === DETECT_IMAGE_FAILURE) {
    return {
      ...state,
      isFetching: false,
      errorMessage: action.errorMessage,
    };
  }

  else if (action.type === DETECT_IMAGE_SUCCESS) {
    return {
      ...state,
      isFetching: false,
      detectedImageLabels: action.detectedImageLabels,
    };
  }

  else if (action.type === RESET_IMAGE_CACHE) {
    return {
      ...state,
      detectedImageLabels: [],
    };
  }

  return state;
}
