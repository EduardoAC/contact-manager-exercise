import React from 'react';
import { generateMockContacts } from '../../utils/testing';
import { shallow } from 'enzyme';

import ContactList from '../../components/ContactList';


describe('<ContactList />', () => {
  let mockedContactList;
  let wrapper;
  beforeAll(() => {
    mockedContactList = generateMockContacts(5);
    wrapper = shallow(<ContactList contacts={mockedContactList} />);
  })
  it('should display a list of contacts', () => {
    expect(wrapper.find('.contact__item')).toHaveLength(5);
  });
  it('should provide a button to add contact', () => {
    expect(wrapper.find('.contact_add')).toHaveLength(1);
  });
  it('should redirect when you click add contact', () => {
    const addContactBtn = wrapper.find('.contact_add');
    addContactBtn.simulate('click');
    expect(wrapper).not.toBe(null);
  })
});
