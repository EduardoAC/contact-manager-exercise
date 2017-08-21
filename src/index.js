import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import App from './App';
import configureStore from './store';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

const store = configureStore(history);

ReactDOM.render((
  <App store={store} history={history} />
), document.getElementById('root'));
