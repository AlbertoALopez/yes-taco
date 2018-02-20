import * as actions from './actions.js';
import {
  SET_FILE_BLOB,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_START,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_SUCCESS,
} from './actions.js';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterEach(() => {
  fetchMock.reset()
  fetchMock.restore()
});

describe('actions', () => {
  it('should create an action to for a file blob', () => {
    const file = { blob: 'testing' };
    const expectedAction = {
      type: SET_FILE_BLOB,
      file,
    };

    expect(actions.setFileBlob(file)).toEqual(expectedAction);
  });

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

  it('gets a download url for an uploaded image', () => {
    fetchMock.get('*', {snapshot: {downloadURL: 'www.example.com'}});
  });
});


