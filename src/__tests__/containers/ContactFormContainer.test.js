import React from 'react';
import { shallow, mount } from 'enzyme';

import ContactFormContainer from '../../containers/ContactFormContainer';

describe('<ContactFormContainer />', () => {
  it('Component redenrs correctly', () => {
    const wrapper = shallow(<ContactFormContainer handleSubmit={jest.fn()}/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should submit the form', () => {
    const handleSubmit = jest.fn();
    const wrapper = mount(<ContactFormContainer handleSubmit={handleSubmit}/>);
    const submitButton = wrapper.find("input[type='submit']");
    submitButton.simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    // Waiting for redux-form
    // expect(handleSubmit).toHaveBeenCalledWith({
    //   firstName: 'Homer',
    //   lastName: 'Simpson',
    //   address: 'Sprinfield',
    //   phoneNumber: '555-sprinfield',
    //   email: 'homer.simpson@sprinfield.com'
    // });
  });
});
