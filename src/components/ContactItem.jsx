import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ContactItem = (props) => {
  const {
    id,
    firstName,
    lastName,
    phoneNumber,
    address,
    email,
  } = props;
  return (
    <tr className="contact__item">
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{address}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      <td>
        <Link to={`/${id}/edit`} style={{ marginRight: '5px' }}>Edit</Link>
        <Link to={`/${id}/delete`}>Delete</Link>
      </td>
    </tr>
  )
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ContactItem;
