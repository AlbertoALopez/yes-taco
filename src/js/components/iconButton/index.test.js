import React from 'react';
import IconButton from './index.js';

test('Button renders correctly', () => {
  const wrapper = shallow(<IconButton type="check" size={30} />);

  expect(wrapper).toMatchSnapshot();
});
