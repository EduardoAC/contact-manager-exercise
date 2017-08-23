import React from 'react';
import { shallow, mount } from 'enzyme';

import { ContactForm } from '../../components/ContactForm';

const componentProps = {
  onSubmit: jest.fn(),
  handleSubmit: jest.fn((cb, values) => cb(values)),
  submitting: false,
  pristine: false,
}
describe('<ContactForm />', () => {
  let wrapper
  it('Component renders correctly', () => {
    const wrapper = shallow(<ContactForm {...componentProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should submit the form', () => {
    const onSubmit = jest.fn();
    const specificProps = {...componentProps, onSubmit};
    const wrapper = shallow(<ContactForm {...specificProps} />);
    const submitButton = wrapper.find("input[type='submit']");
    submitButton.simulate('submit');
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
