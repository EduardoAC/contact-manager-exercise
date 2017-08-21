import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactList from '../components/ContactList';

class HomepageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { contacts } = this.props;
    return (
      <div>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

HomepageContainer.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts && state.contacts.values || [],
});

const mapDispatchToProps = () => ({});


export default connect(mapStateToProps, mapDispatchToProps)(HomepageContainer);
