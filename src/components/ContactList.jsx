import React from 'react';
import PropTypes from 'prop-types'

const ContactList = (props) => {
  const { contacts } = props;

  const contactList = contacts.map((contact) => (
    <li
      key={`contact-${contact.firstName}`}
      className="contact__item"
    >
    {contact.firstName}
    </li>
  ));
  return (
    <div>
      <h1>Contact List</h1>
      <button className="contact_add">Add contact</button>
      <ul>{contactList}</ul>
    </div>
  )
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
};

export default ContactList;
