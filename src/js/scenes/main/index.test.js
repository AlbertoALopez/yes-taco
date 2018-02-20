import React from 'react';
import { Main } from './index.js';
import { StaticRouter } from 'react-router-dom';

test('Main renders correctly', () => {

  const wrapper = shallow(
    // Stub needed to mock react router context
    <StaticRouter context={{}}>
      <Main />
    </StaticRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});
