import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from '../constants/ActionTypes';
import {
  insertItem,
  updateObjectInArray,
} from '../utils/immutableArrayTools';
import { removeContact } from '../utils/contactsTools';

const initialState = {
  index: {},
  values: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        index: { ...state.index, ...{ [action.contact.id]: state.values.length } },
        values: insertItem(state.values, action.contact),
      }
    case UPDATE_CONTACT:
      return {
        ...state,
        values: updateObjectInArray(
          state.values,
          action.contact,
          state.index[action.id]
        ),
      }
    case DELETE_CONTACT:
      const newIndex = { ...state.index };
      delete newIndex[action.id];
      return {
        ...state,
        ...removeContact(state.values, state.index[action.id]),
      }
    default:
      return state;
  }
};
