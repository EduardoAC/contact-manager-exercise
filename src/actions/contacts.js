import { ADD_CONTACT } from '../constants/ActionTypes';

export const addContact = (contact) => {
  return ({
    type: ADD_CONTACT,
    contact
  });
};
