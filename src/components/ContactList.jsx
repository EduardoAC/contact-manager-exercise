import React from 'react';
import PropTypes from 'prop-types'

import ContactItem from './ContactItem';

const ContactList = (props) => {
  const { contacts } = props;
  const contactList = contacts.map(
    (contact) => (<ContactItem key={`contact-${contact.id}`} {...contact} />)
  );
  return (
    <div>
      <h1>Contact List</h1>
      <table>
        <tbody>
          {contactList}
        </tbody>
      </table>
    </div>
  );
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
