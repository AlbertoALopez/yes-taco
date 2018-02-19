export const UPLOAD_IMAGE_START = 'UPLOAD_IMAGE_START';

const uploadImageStart = fileRef => {
  return {
    type: UPLOAD_IMAGE_START,
    fileRef,
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

const uploadImage = (fileRef) => {
  return function(dispatch) {
    dispatch(uploadImageStart(fileRef));

    return;
  };
};

export {
  uploadImageStart,
  uploadImageFailure,
  uploadImageSuccess,
  uploadImage,
};
