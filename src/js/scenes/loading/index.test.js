import React from 'react';
import { Loading } from './index.js';

test('Loading renders correctly', () => {
  const props = {
    uploadingImage: false,
    uploadErrorMessage: null,
    detectingImage: false,
    detectImageError: 'Error',
    history: {
      push: jest.fn(),
    },
  };

  const wrapper = shallow(<Loading {...props} />);

  expect(wrapper).toMatchSnapshot();
});
