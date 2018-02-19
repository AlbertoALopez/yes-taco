import React from 'react';
import PictureInput from './index.js';

function setup() {
  const props = {
    uploadToFirebase: jest.fn(),
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
      expect(props.uploadToFirebase.mock.calls.length).toBe(1);
    });
  });

  it('Should render correctly', () => {
    const uploadToFirebase = jest.fn();
    const wrapper = shallow(<PictureInput uploadToFirebase={uploadToFirebase} />);

    expect(wrapper).toMatchSnapshot();
  });
});

