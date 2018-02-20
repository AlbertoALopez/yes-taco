import React from 'react';
import { Upload } from './index.js';

test('Dialog renders correctly', () => {
  const props = {
    uploadToFirebase: jest.fn(),
    history: {
      push: jest.fn(),
    },
  };

  const wrapper = shallow(<Upload {...props} />);

  expect(wrapper).toMatchSnapshot();
});
