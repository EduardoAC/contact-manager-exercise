import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import {
  addContact,
  updateContact
} from '../actions/contacts';
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
  homepageRedirect: PropTypes.func.isRequired,
};

const getContactId = (props) => (
  props.match && props.match.params && props.match.params.id
)

const getContactFromState = (state, props) => {
  const id = getContactId(props);
  let contact = undefined;
  let index = -1;
  if (id) {
    index = state.contacts.index[id];
  }
  if (index >= 0) {
    contact = state.contacts.values[index];
  }
  return contact;
}

const mapStateToProps = (state, ownProps) => ({
  contact: getContactFromState(state, ownProps),
  contactId: getContactId(ownProps),
});

const mapDispatchToProps = (dispatch) => ({
  addContact: contact => dispatch(addContact(contact)),
  updateContact: (contactId, contact) => dispatch(updateContact(contactId, contact)),
  homepageRedirect: () => dispatch(push('/')),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactFormContainer);
