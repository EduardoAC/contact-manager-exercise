import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from '../constants/ActionTypes';
import guid from '../utils/guid';

export const addContact = (contact) => {
  return ({
    type: ADD_CONTACT,
    contact: Object.assign({}, contact, { id: guid() })
  });
};

export const updateContact = (contactId, contact) => {
  return ({
    type: UPDATE_CONTACT,
    id: contactId,
    contact
  });
};

export const deleteContact = (contactId) => {
  return ({
    type: DELETE_CONTACT,
    id: contactId,
  });
};
