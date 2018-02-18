import React from 'react';
import Upload from './index.js';

test('Dialog renders correctly', () => {
  const wrapper = shallow(<Upload />);

  expect(wrapper).toMatchSnapshot();
});
