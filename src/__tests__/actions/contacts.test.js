import {
  addContact,
  updateContact,
  deleteContact
} from '../../actions/contacts';
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from '../../constants/ActionTypes';
import { getFakeContact } from '../../utils/testing';
import guid from '../../utils/guid';

describe('Contact actions', () => {
  it('add contact action should generate an id', () => {
    const contact = getFakeContact();
    delete contact.id;
    expect(addContact(contact)).toBeDefined();

  });

  it('should create an add contact action', () => {
    const contact = getFakeContact();
    delete contact.id;
    const expectedAction = {
      type: ADD_CONTACT,
      contact,
    }
    const result = addContact(contact);
    delete result.contact.id;
    expect(result).toEqual(expectedAction);
  });

  it('should create an update contact action', () => {
    const contact = getFakeContact();
    const contactId = contact.id;
    delete contact.id;
    const expectedAction = {
      type: UPDATE_CONTACT,
      id: contactId,
      contact,
    }
    expect(updateContact(contactId, contact)).toEqual(expectedAction);
  });

  it('should create an delete contact action', () => {
    const contactId = guid();
    const expectedAction = {
      type: UPDATE_CONTACT,
      id: contactId,
    }
    expect(updateContact(contactId)).toEqual(expectedAction);
  });
});
