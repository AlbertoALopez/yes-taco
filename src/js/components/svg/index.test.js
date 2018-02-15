import React from 'react';
import App from './index.js';
import renderer from 'react-test-renderer';

test('App renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});