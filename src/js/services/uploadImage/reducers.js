import {
  UPLOAD_IMAGE_START,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE,
} from './actions.js';

const initialState = {
  isFetching: false,
  errorMessage: null,
  uploadedImageUrl: null,
};

export default function imageUploadReducer(state = initialState, action) {
  if (action.type === UPLOAD_IMAGE_START) {
    return {
      ...state,
      isFetching: true,
    };
  }

  else if (action.type === UPLOAD_IMAGE_FAILURE) {
    return {
      ...state,
      isFetching: false,
      errorMessage: action.errorMessage,
    };
  }

  else if (action.type === UPLOAD_IMAGE_SUCCESS) {
    return {
      ...state,
      isFetching: false,
      uploadedImageUrl: action.uploadedImageUrl,
    };
  }

  return state;
}
