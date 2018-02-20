import reducer from './reducers.js'
import {
  DETECT_IMAGE_START,
  DETECT_IMAGE_FAILURE,
  DETECT_IMAGE_SUCCESS,
  DETECT_IMAGE,
  RESET_IMAGE_CACHE,
} from './actions.js';

describe('detect image reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isFetching: false,
      errorMessage: null,
      detectedImageLabels: [],
    });
  });

  it('should handle RESET_IMAGE_CACHE', () => {
    const cloudAction = {
      type: RESET_IMAGE_CACHE,
    };

    expect(reducer({
      detectedImageLabels: ['meow'],
    }, cloudAction)).toEqual({
      detectedImageLabels: [],
    });
  });

  it('should handle DETECT_IMAGE_START', () => {
    const cloudAction = {
      type: DETECT_IMAGE_START,
      fileUrl: 'www.example.com',
    };

    expect(reducer({}, cloudAction)).toEqual({
      isFetching: true,
    });
  });

  it('should handle DETECT_IMAGE_FAILURE', () => {
    const cloudAction = {
      type: DETECT_IMAGE_FAILURE,
      errorMessage: 'error',
    };

    expect(reducer({}, cloudAction)).toEqual({
      isFetching: false,
      errorMessage: 'error',
    });
  });

  it('should handle DETECT_IMAGE_SUCCESS', () => {
    const cloudAction = {
      type: DETECT_IMAGE_SUCCESS,
      detectedImageLabels: [{ description: 'cat' }],
    };

    expect(reducer({}, cloudAction)).toEqual({
      isFetching: false,
      detectedImageLabels: [{ description: 'cat' }],
    });
  });
});
