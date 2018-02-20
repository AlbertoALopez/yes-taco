import React from 'react';
import { Results } from './index.js';

test('Loading renders correctly', () => {
  const props = {
    imageLabels: [{ description: 'taco', score: 100 }],
  };

  const wrapper = shallow(<Results {...props} />);

  expect(wrapper).toMatchSnapshot();
});
