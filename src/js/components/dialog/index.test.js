import React from 'react';
import Dialog from './index.js';

test('Dialog renders correctly', () => {
  const wrapper = shallow(
    <Dialog
      dialogText="Testing123"
    />);

  expect(wrapper).toMatchSnapshot();
});
