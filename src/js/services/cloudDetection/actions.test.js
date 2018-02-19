import * as actions from './actions.js';
import {
  DETECT_IMAGE,
  DETECT_IMAGE_START,
  DETECT_IMAGE_FAILURE,
  DETECT_IMAGE_SUCCESS,
} from './actions.js';

describe('actions', () => {
  it('should create an action to for an image detection starting', () => {
    const fileUrl = 'www.example.com';
    const expectedAction = {
      type: DETECT_IMAGE_START,
      fileUrl,
    };

    expect(actions.detectImageStart(fileUrl)).toEqual(expectedAction);
  });

  it('should create an action for an image detection failure', () => {
    const response = 'failure';
    const expectedAction = {
      type: DETECT_IMAGE_FAILURE,
      errorMessage: 'Failure on image detection',
      response,
    };

    expect(actions.detectImageFailure(response)).toEqual(expectedAction);
  });

  it('should create an action for an image detection success', () => {
    const detectedImageLabels = [{ name: 'testing' }];
    const expectedAction = {
      type: DETECT_IMAGE_SUCCESS,
      detectedImageLabels,
    };

    expect(actions.detectImageSuccess(detectedImageLabels)).toEqual(expectedAction);
  });
});