import React from 'react';
import PictureInput from './index.js';

test('Dialog renders correctly', () => {
  const wrapper = shallow(<PictureInput />);

  expect(wrapper).toMatchSnapshot();
});
