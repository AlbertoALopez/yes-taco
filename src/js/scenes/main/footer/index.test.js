import React from 'react';
import Footer from './index.js';
import renderer from 'react-test-renderer';

test('Footer renders correctly', () => {
  const wrapper = shallow(<Footer />);

  expect(wrapper).toMatchSnapshot();
});
