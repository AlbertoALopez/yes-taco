import React from 'react';
import Confetti from './index.js';
import renderer from 'react-test-renderer';

test('Confetti renders correctly', () => {
  const tree = renderer.create(<Confetti />).toJSON();

  expect(tree).toMatchSnapshot();
});
