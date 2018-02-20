import React from 'react';
import Main from './index.js';
import renderer from 'react-test-renderer';

test('Main renders correctly', () => {
  const wrapper = shallow(<Main />);

  expect(wrapper).toMatchSnapshot();
});
