import React from 'react';
import SvgIcon from './index.js';
import renderer from 'react-test-renderer';

test('SvgIcon renders correctly', () => {
  const tree = renderer.create(<SvgIcon />).toJSON();

  expect(tree).toMatchSnapshot();
});
