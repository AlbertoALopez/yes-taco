import React from 'react';
import PictureInput from './index.js';
import 'babel-polyfill';

function setup() {
  const props = {
    uploadToFirebase: jest.fn(),
    transitionToLoading: jest.fn(),
  };

  const enzymeWrapper = mount(<PictureInput {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Component test', () => {
  describe('PictureInput', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper, props } = setup();

      expect(enzymeWrapper.find('form').hasClass('picture-form')).toBe(true);
      // Calls uploadToFirebase action
      const form = enzymeWrapper.find('form');
      form.props().onSubmit({
        preventDefault: jest.fn(),
      });

      expect(props.uploadToFirebase.mock.calls.length).toBe(0);
    });
  });

  it('Should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<PictureInput {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});

