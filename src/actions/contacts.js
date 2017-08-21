import { ADD_CONTACT } from '../constants/ActionTypes';
import guid from '../utils/guid';

export const addContact = (contact) => {
  return ({
    type: ADD_CONTACT,
    contact: Object.assign({}, contact, { id: guid() })
  });
};
