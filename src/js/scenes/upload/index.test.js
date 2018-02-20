import React from 'react';
import { Upload } from './index.js';
import 'babel-polyfill';

function setup(givenProps) {
  const props = {
    uploadToFirebase: jest.fn(),
    history: {
      push: jest.fn(),
    },
    ...givenProps,
  };

  const wrapper = mount(<Upload {...props} />);

  return {
    props,
    wrapper,
  };
}

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