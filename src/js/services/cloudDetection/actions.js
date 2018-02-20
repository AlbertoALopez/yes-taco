import config from '../../../../config/cloudApi.config.js';


export const RESET_IMAGE_CACHE = 'RESET_IMAGE_CACHE';

const resetImageCache = () => ({ type: RESET_IMAGE_CACHE });


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

    return fetch(`https://vision.googleapis.com/v1/images:annotate?key=${config.GCP_API_KEY}`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
       'content-type': 'application/json',
      },
      body: JSON.stringify({
        requests: [
          {
            image: {
              source: {
                imageUri: fileUrl,
              },
            },
            features: [
              {
                type: 'LABEL_DETECTION',
                maxResults: 8,
              },
            ],
          },
        ],
      }),
    })
      .then(response => response.json())
      .then((response) => {
        console.log(response.error);
        if (response.error) return dispatch(detectImageFailure(response.error));

        console.log(response.responses);

        return dispatch(detectImageSuccess(response.responses[0].labelAnnotations));
      });
  };
};

export {
  resetImageCache,
  detectImageStart,
  detectImageFailure,
  detectImageSuccess,
  detectImage,
};
