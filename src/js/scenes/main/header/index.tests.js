import React from 'react';
import Header from './index.js';
import renderer from 'react-test-renderer';

test('Header renders correctly', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});
