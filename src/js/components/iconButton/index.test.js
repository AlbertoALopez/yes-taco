import React from 'react';
import IconButton from './index.js';

test('Button renders correctly', () => {
  const wrapper = shallow(<IconButton type="check" size={30} />);

  expect(wrapper).toMatchSnapshot();
});

test('Button has a click workking click handler', () => {
  const clickHandler = jest.fn();
  const wrapper = mount(<IconButton clickHandler={clickHandler} />);

  wrapper.find('Button').simulate('click');
  expect(clickHandler.mock.calls.length).toBe(1);
});
