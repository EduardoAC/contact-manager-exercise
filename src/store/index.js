import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers/index';

const configureStore = () => {
  const enhancer = composeWithDevTools();
  return createStore(reducers, enhancer);
}
export default configureStore;
