import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux'

import contacts from './contacts';

export default combineReducers({
  router,
  form,
  contacts,
});
