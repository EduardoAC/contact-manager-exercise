import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'

export const ContactForm = (props) => {
  const { onSubmit, handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <label>First name:</label>
      <div>
        <Field type="text" component="input" name="firstName" />
      </div>
      <label>Last name:</label>
      <div>
        <Field type="text" component="input" name="lastName" />
      </div>
      <label>Address:</label>
      <div>
        <Field type="text" component="input" name="address" />
      </div>
      <label>Phone number: </label>
      <div>
        <Field type="text" component="input" name="phoneNumber" />
      </div>
      <label>email: </label>
      <div>
        <Field type="text" component="input" name="email" />
      </div>
      <input type="submit" value="Submit" disabled={pristine || submitting} />
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
}

export default reduxForm({
  form: 'contact'
})(ContactForm);
