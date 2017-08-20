import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import contacts from './contacts';

export default combineReducers({
  form,
  contacts,
});
