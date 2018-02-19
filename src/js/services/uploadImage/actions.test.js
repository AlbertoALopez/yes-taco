import * as actions from './actions.js';
import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_START,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_SUCCESS,
} from './actions.js';

describe('actions', () => {
  it('should create an action to for an image upload starting', () => {
    const file = { name: 'testing' };
    const expectedAction = {
      type: UPLOAD_IMAGE_START,
      file,
    };

    expect(actions.uploadImageStart(file)).toEqual(expectedAction);
  });

  it('should create an action for an image upload failure', () => {
    const response = 'failure';
    const expectedAction = {
      type: UPLOAD_IMAGE_FAILURE,
      errorMessage: 'Failed to upload image',
      response,
    };

    expect(actions.uploadImageFailure(response)).toEqual(expectedAction);
  });

  it('should create an action for an image upload success', () => {
    const uploadedImageUrl = 'www.example.com';
    const expectedAction = {
      type: UPLOAD_IMAGE_SUCCESS,
      uploadedImageUrl,
    };

    expect(actions.uploadImageSuccess(uploadedImageUrl)).toEqual(expectedAction);
  });
});
