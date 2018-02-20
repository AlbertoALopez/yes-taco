import React from 'react';
import SvgOverlay from './index.js';
import renderer from 'react-test-renderer';

test('SvgOverlay renders correctly', () => {
  const tree = renderer.create(<SvgOverlay />).toJSON();

  expect(tree).toMatchSnapshot();
});
