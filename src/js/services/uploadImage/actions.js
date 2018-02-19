import * as firebase from 'firebase/app';
import 'firebase/storage';
import config from '../../../../config/firebase.config.js';

// Init firebase app
const app = firebase.initializeApp(config);

// Create reference to image bucket
const ref = app.storage().ref('images');
console.log(ref);

export const UPLOAD_IMAGE_START = 'UPLOAD_IMAGE_START';

const uploadImageStart = file => {
  return {
    type: UPLOAD_IMAGE_START,
    file,
  };
};


export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';

const uploadImageFailure = response => {
  return {
    type: UPLOAD_IMAGE_FAILURE,
    errorMessage: 'Failed to upload image',
    response,
  };
};


export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';

const uploadImageSuccess = uploadedImageUrl => {
  return {
    type: UPLOAD_IMAGE_SUCCESS,
    uploadedImageUrl,
  };
};


export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';

const uploadImage = file => {
  return function action(dispatch) {
    dispatch(uploadImageStart(file));

    return file;
  };
};

export {
  uploadImageStart,
  uploadImageFailure,
  uploadImageSuccess,
  uploadImage,
};
