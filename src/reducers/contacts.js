import { ADD_CONTACT } from '../constants/ActionTypes';

const initialState = {
  contacts: {
    values: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.contact]
      }
    default:
      return state;
  }
};
