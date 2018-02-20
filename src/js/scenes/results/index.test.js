import React from 'react';
import { Results } from './index.js';

function setup(givenProps) {
  const props = {
    imageLabels: [{ description: 'taco', score: 100 }],
    file: {},
    history: {
      push: jest.fn(),
    },
    resetImageCache: jest.fn(),
    ...givenProps,
  };

  const wrapper = mount(<Results {...props} />);

  return {
    props,
    wrapper,
  };
}

test('Loading renders correctly', () => {
  const props = {
    imageLabels: [{ description: 'taco', score: 100 }],
    file: {},
    history: {
      push: jest.fn(),
    },
    resetImageCache: jest.fn(),
  };

  const wrapper = shallow(<Results {...props} />);

  expect(wrapper).toMatchSnapshot();
});


describe('functional tests', () => {
  it('congratulates you on finding a taco', () => {
    const imageLabels = [{ description: 'taco', score: 50 }];
    const { wrapper } = setup({ imageLabels });

    expect(wrapper.find('.confetti').length).toBe(12);
  });

  it('renders a list of other matches when no taco found', () => {
    const imageLabels = [{ description: 'dog', score: 1 }];
    const { wrapper } = setup({ imageLabels });

    expect(wrapper.find('.results-list').length).toBe(1);
  });
});
