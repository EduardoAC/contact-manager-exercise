import React from 'react';
import { mockedContactList } from '../../utils/testing';
import { shallow } from 'enzyme';

import ContactList from '../../components/ContactList';
import ContactItem from '../../components/ContactItem';


describe('<ContactList />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<ContactList contacts={mockedContactList} />);
  });

  it('Component renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display a list of contacts', () => {
    expect(wrapper.find(ContactItem)).toHaveLength(5);
  });
});
