import {
  ADD_CONTACT,
  UPDATE_CONTACT,
} from '../constants/ActionTypes';
import {
  insertItem,
  removeItem,
  updateObjectInArray,
} from '../utils/immutableArrayTools';

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
    default:
      return state;
  }
};
