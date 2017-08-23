import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from '../../constants/ActionTypes';
import contactsReducer from '../../reducers/contacts';
import { getFakeContact } from '../../utils/testing';

describe('Contacts reducer', () => {
  it('should return the initial state', () => {
    expect(contactsReducer(undefined, {})).toEqual({
      index: {},
      values: [],
    })
  })

  it('should add contact to the state and index it', () => {
    const contact = getFakeContact();
    const action = {
      type: ADD_CONTACT,
      contact,
    }
    expect(contactsReducer(undefined, action)).toEqual({
      index: { [contact.id]: 0 },
      values: [ contact ],
    });
  });

  it('should update contact to the state and index remain the same', () => {
    const contact1 = getFakeContact();
    const contactToEdit = getFakeContact();
    const contactNewValues = getFakeContact();
    contactNewValues.id = contactToEdit.id;
    const state = {
      index: { [contact1.id]: 0, [contactToEdit.id]: 1 },
      values: [ contact1, contactToEdit ],
    }
    const action = {
      type: UPDATE_CONTACT,
      id: contactNewValues.id,
      contact: contactNewValues,
    }

    expect(contactsReducer(state, action)).toEqual(Object.assign(
      {},
      state,
      { values: [ contact1, contactNewValues ]}
    ));
  });

  it('should delete contact to the state and index is recalculated', () => {
    const contact1 = getFakeContact();
    const contact2 = getFakeContact();
    const state = {
      index: { [contact1.id]: 0, [contact2.id]: 1 },
      values: [ contact1, contact2 ],
    }
    const action = {
      type: DELETE_CONTACT,
      id: contact1.id,
    }
    const newStatestate = {
      index: { [contact2.id]: 0 },
      values: [ contact2 ],
    }
    expect(contactsReducer(state, action)).toEqual(newStatestate);
  });
});
