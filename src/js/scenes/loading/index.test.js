import React from 'react';
import { Loading } from './index.js';

function setup(givenProps) {
  const props = {
    uploadingImage: false,
    uploadErrorMessage: null,
    detectingImage: false,
    detectImageError: 'Error',
    history: {
      push: jest.fn(),
    },
    file: {},
    ...givenProps,
  };

  const wrapper = mount(<Loading {...props} />);

  return {
    props,
    wrapper,
  };
}

test('Loading renders correctly', () => {
  const props = {
    uploadingImage: false,
    uploadErrorMessage: null,
    detectingImage: false,
    detectImageError: 'Error',
    history: {
      push: jest.fn(),
    },
    file: {},
  };

  const wrapper = shallow(<Loading {...props} />);

  expect(wrapper).toMatchSnapshot();
});

describe('functional tests', () => {
  it('renders an error message if image uploading fails', () => {
    const { props, wrapper } = setup({ uploadErrorMessage: 'Error' });

    expect(wrapper.find('.loading-error').length).toBe(1);

  });

  it('renders an error message if image detecting fails', () => {
    const { props, wrapper } = setup({ detectImageError: 'Error' });

    expect(wrapper.find('.loading-error').length).toBe(1);

  });

  it('renders a loader during image detection', () => {
    const { props, wrapper } = setup({ uploadingImage: true });

    expect(wrapper.find('.loader').length).toBe(1);

  });
});
