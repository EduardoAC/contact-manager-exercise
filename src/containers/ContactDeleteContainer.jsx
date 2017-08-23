import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { deleteContact } from '../actions/contacts';
import ContactList from '../components/ContactList';
import { getContactId, getContactFromState } from '../utils/contactsTools';

export class ContactDeleteContainer extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
  }

  componentDidMount () {
    this.handleDeleteContact();
  }

  handleDeleteContact() {
    const { contactId, contact, deleteContact, homepageRedirect } = this.props;
    if( contactId && contact ) {
      deleteContact(contactId);
    }
    homepageRedirect();
  }

  render(){
    return null;
  }
}

ContactDeleteContainer.propTypes = {
  contactId: PropTypes.string,
  contact: PropTypes.shape({}),
  deleteContact: PropTypes.func.isRequired,
  homepageRedirect: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  contact: getContactFromState(state, ownProps),
  contactId: getContactId(ownProps),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: (contactId) => dispatch(deleteContact(contactId)),
  homepageRedirect: () => dispatch(push('/')),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactDeleteContainer);
