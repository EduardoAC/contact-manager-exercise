import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { addContact } from '../actions/contacts';
import ContactForm from '../components/ContactForm';

class ContactFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { addContact, homepageRedirect } = this.props;
    addContact(values);
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
  contact: PropTypes.shape({}),
  addContact: PropTypes.func.isRequired,
  homepageRedirect: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  contact: (ownProps.match
    && ownProps.match.params
    && ownProps.match.params.id) ?
    state.contacts.values[parseInt(ownProps.match.params.id, 10)] : undefined
});

const mapDispatchToProps = (dispatch) => ({
  addContact: contact => dispatch(addContact(contact)),
  homepageRedirect: () => dispatch(push('/')),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactFormContainer);
