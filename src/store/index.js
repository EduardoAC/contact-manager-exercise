import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import reducers from '../reducers/index';

const configureStore = (history) => {
  const enhancer = composeWithDevTools(
    applyMiddleware(routerMiddleware(history))
  );
  return createStore(reducers, enhancer);
}

export default configureStore;
