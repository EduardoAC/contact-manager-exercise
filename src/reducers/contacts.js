import { ADD_CONTACT } from '../constants/ActionTypes';

const initialState = {
  values: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        values: [...state.values, action.contact]
      }
    default:
      return state;
  }
};
