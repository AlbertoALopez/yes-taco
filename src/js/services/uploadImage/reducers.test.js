import reducer from './reducers.js'
import {
  SET_FILE_BLOB,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_START,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_SUCCESS,
} from './actions.js';

describe('upload image reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isFetching: false,
      errorMessage: null,
      uploadedImageUrl: null,
      file: null,
    });
  });

  it('should handle SET_FILE_BLOB', () => {
    const fileAction = {
      type: SET_FILE_BLOB,
      file: {},
    };

    expect(reducer({}, fileAction)).toEqual({
      file: {},
    });
  });

  it('should handle UPLOAD_IMAGE_START', () => {
    const imageAction = {
      type: UPLOAD_IMAGE_START,
      file: {},
    };

    expect(reducer({}, imageAction)).toEqual({
      isFetching: true,
    });
  });

  it('should handle UPLOAD_IMAGE_FAILURE', () => {
    const imageAction = {
      type: UPLOAD_IMAGE_FAILURE,
      errorMessage: 'error',
    };

    expect(reducer({}, imageAction)).toEqual({
      isFetching: false,
      errorMessage: 'error',
    });
  });

  it('should handle UPLOAD_IMAGE_SUCCESS', () => {
    const imageAction = {
      type: UPLOAD_IMAGE_SUCCESS,
      uploadedImageUrl: 'www.example.com',
    };

    expect(reducer({}, imageAction)).toEqual({
      isFetching: false,
      uploadedImageUrl: 'www.example.com',
    });
  });
});
