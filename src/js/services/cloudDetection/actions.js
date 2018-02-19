export const DETECT_IMAGE_START = 'DETECT_IMAGE_START';

const detectImageStart = fileUrl => {
  return {
    type: DETECT_IMAGE_START,
    fileUrl,
  };
};


export const DETECT_IMAGE_FAILURE = 'DETECT_IMAGE_FAILURE';

const detectImageFailure = response => {
  return {
    type: DETECT_IMAGE_FAILURE,
    errorMessage: 'Failure on image detection',
    response,
  };
};


export const DETECT_IMAGE_SUCCESS = 'DETECT_IMAGE_SUCCESS';

const detectImageSuccess = detectedImageLabels => {
  return {
    type: DETECT_IMAGE_SUCCESS,
    detectedImageLabels,
  };
};


export const DETECT_IMAGE = 'DETECT_IMAGE';

const detectImage = (fileUrl) => {
  return function action(dispatch) {
    dispatch(detectImageStart(fileUrl));

    return;
  };
};

export {
  detectImageStart,
  detectImageFailure,
  detectImageSuccess,
  detectImage,
};
