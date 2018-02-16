import React from 'react';
import Dialog from './index.js';
import renderer from 'react-test-renderer';

test('Dialog renders correctly', () => {
  const tree = renderer.create(<Dialog />).toJSON();

  expect(tree).toMatchSnapshot();
});
