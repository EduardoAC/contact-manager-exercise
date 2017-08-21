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
    return (<ContactForm onSubmit={this.handleSubmit} />);
  }
}

ContactFormContainer.propTypes = {
  addContact: PropTypes.func.isRequired,
  homepageRedirect: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  addContact: contact => dispatch(addContact(contact)),
  homepageRedirect: () => dispatch(push('/')),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactFormContainer);
