import React from 'react';
import { Upload } from './index.js';

test('Dialog renders correctly', () => {
  const uploadToFirebase = jest.fn();
  const wrapper = shallow(<Upload uploadToFirebase={uploadToFirebase} />);

  expect(wrapper).toMatchSnapshot();
});
