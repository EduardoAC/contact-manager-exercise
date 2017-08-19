import React from 'react';

import ContactList from './components/ContactList';
import { generateMockContacts } from './utils/testing';

const App = () => (
  <div>
    <h1>Hello world!</h1>
    <ContactList contacts={generateMockContacts(4)} />
  </div>
);

export default App;
