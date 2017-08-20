import React from 'react';
import PropTypes from 'prop-types';

const ContactFormContainer = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} >
      <p>First name:</p>
      <input type="text" name="firstName" />
      <p>Last name:</p>
      <input type="text" name="lastName" />
      <p>Address:</p>
      <input type="text" name="address" />
      <p>Phone number: </p>
      <input type="text" name="phoneNumber" />
      <p>email: </p>
      <input type="text" name="email" />
      <input type="submit" value="Submit" />
    </form>
  );
}

ContactFormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default ContactFormContainer;
