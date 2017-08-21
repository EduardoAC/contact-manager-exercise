import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import {
  addContact,
  updateContact
} from '../actions/contacts';
import { getContactId, getContactFromState } from '../utils/contactsTools';
import ContactForm from '../components/ContactForm';

class ContactFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { contact, contactId, addContact, updateContact, homepageRedirect } = this.props;
    if (contactId && contact){
      updateContact(contactId, values);
    } else {
      addContact(values);
    }
    homepageRedirect();
  }

  render(){
    const { contact } = this.props;
    console.log(contact);
    return (<ContactForm
      onSubmit={this.handleSubmit}
      initialValues={contact}
    />);
  }
}

ContactFormContainer.propTypes = {
  contactId: PropTypes.string,
  contact: PropTypes.shape({}),
  addContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  homepageRedirect: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  contact: getContactFromState(state, ownProps),
  contactId: getContactId(ownProps),
});

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(addContact(contact)),
  updateContact: (contactId, contact) => dispatch(updateContact(contactId, contact)),
  homepageRedirect: () => dispatch(push('/')),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactFormContainer);
