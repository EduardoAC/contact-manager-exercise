import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Router, Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { generateMockContacts } from './utils/testing';
import HomepageContainer from './containers/HomepageContainer';
import ContactFormContainer from './containers/ContactFormContainer';
import ContactDeleteContainer from './containers/ContactDeleteContainer';

const App = ({store, history}) => (
  <Provider store={store}>
    <ConnectedRouter  history={history} >
      <div>
        <h1>Contact manager</h1>
        <Link to="/add-contact" >Add contact </Link>
        <Route exact path='/' component={HomepageContainer} />
        <Route path='/add-contact' component={ContactFormContainer} />
        <Route path='/:id/edit' component={ContactFormContainer} />
        <Route path='/:id/delete' component={ContactDeleteContainer} />
        </div>
    </ConnectedRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
}

export default App;
