import React from 'react';
import ResultsList from './index.js';
import renderer from 'react-test-renderer';

test('ResultsList renders correctly', () => {
  const imageLabels = [{ description: 'dog' }];
  const tree = renderer.create(<ResultsList imageLabels={imageLabels} />).toJSON();

  expect(tree).toMatchSnapshot();
});
