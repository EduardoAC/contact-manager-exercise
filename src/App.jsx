import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Router, Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { generateMockContacts } from './utils/testing';
import HomepageContainer from './containers/HomepageContainer';
import ContactFormContainer from './containers/ContactFormContainer';

const App = ({store, history}) => (
  <Provider store={store}>
    <ConnectedRouter  history={history} >
      <div>
        <h1>Hello world!</h1>
        <Link to="/add-contact" >Link </Link>
        <Route exact path='/' component={HomepageContainer} />
        <Route path='/add-contact' component={ContactFormContainer} />
        </div>
    </ConnectedRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
}

export default App;
