import React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router-dom';

import ContactItem from '../../components/ContactItem';
import { getFakeContact } from '../../utils/testing';

describe('<ContactItem />', () => {
  let wrapper
  it('Component renders correctly', () => {
    const wrapper = shallow(<ContactItem {...getFakeContact()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('contains an edit link to modify contact', () => {
    const contact = getFakeContact();
    const wrapper = shallow(<ContactItem {...contact} />);
    expect(wrapper.find(Link).first().props().to).toBe(`/${contact.id}/edit`);
  });

  it('contains an delete link to modify contact', () => {
    const contact = getFakeContact();
    const wrapper = shallow(<ContactItem {...contact} />);
    expect(wrapper.find(Link).at(1).props().to).toBe(`/${contact.id}/delete`);
  });
});
