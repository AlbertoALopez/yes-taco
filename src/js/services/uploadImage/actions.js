import * as firebase from 'firebase/app';
import 'firebase/storage';
import config from '../../../../config/firebase.config.js';

// Init firebase app
const app = firebase.initializeApp(config);

// Create reference to image bucket
const storageRef = app.storage().ref('images');
// console.log(ref);

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

    // Create a child refrence from the images folder
    const imageRef = storageRef.child(file.name);

    return imageRef.put(file).then(snapshot => {
      console.log(snapshot);

      if (snapshot.state !== 'success') {
        console.log(`Error uploading image: ${snapshot.state}`);
        return dispatch(uploadImageFailure(snapshot));
      }

      return dispatch(uploadImageSuccess(snapshot.downloadURL));
    });
  };
};

export {
  uploadImageStart,
  uploadImageFailure,
  uploadImageSuccess,
  uploadImage,
};
