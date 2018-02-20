import * as firebase from 'firebase/app';
import 'firebase/storage';
import config from '../../../../config/firebase.config.js';

import { detectImage } from '../cloudDetection/actions.js';

// Init firebase app
const app = firebase.initializeApp(config);

// Create reference to image bucket
const storageRef = app.storage().ref('images');

export const SET_FILE_BLOB = 'SET_FILE_BLOB';

const setFileBlob = file => {
  return {
    type: SET_FILE_BLOB,
    file,
  };
};

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
    dispatch(setFileBlob(file));
    dispatch(uploadImageStart(file));

    // Create a child refrence from the images folder
    const imageRef = storageRef.child(file.name);

    return imageRef.put(file).then(snapshot => {
      console.log(snapshot);

      if (snapshot.state !== 'success') {
        console.log(`Error uploading image: ${snapshot.state}`);
        return dispatch(uploadImageFailure(snapshot));
      }

      // dispatch action to google vision api with image url
      dispatch(detectImage(snapshot.downloadURL));
      return dispatch(uploadImageSuccess(snapshot.downloadURL));
    });
  };
};

export {
  setFileBlob,
  uploadImageStart,
  uploadImageFailure,
  uploadImageSuccess,
  uploadImage,
};
