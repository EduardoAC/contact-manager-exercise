import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ContactList from './components/ContactList';
import { generateMockContacts } from './utils/testing';
import ContactFormContainer from './containers/ContactFormContainer';

const App = ({store}) => (
  <Provider store={store}>
    <Router>
      <div>
        <h1>Hello world!</h1>
        <Link to="/add-contact" >Link </Link>
        <Route exact path='/' render={() => (
            <ContactList contacts={generateMockContacts(4)} />
          )}
          />
        <Route path='/add-contact' render={() => {
            console.log('enter');
            return (<ContactFormContainer handleSubmit={()=> {console.log('hello');}} />);
          }} />
        </div>
      </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
}

export default App;
