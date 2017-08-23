import {
  getContactId,
  getContactFromState,
  removeContact,
} from '../../utils/contactsTools';
import { generateMockContacts } from '../../utils/testing';;

describe('Contacts toolbox', () => {
  it('should access to the paramater from the router state', () => {
    expect(getContactId({ match: { params: { id: 112 } } })).toBe(112);
  });

  it('should find the contact in the state', () => {
    const array = generateMockContacts(3);
    const state = {
      contacts: {
        index: { [array[0].id]: 0, [array[1].id]: 1, [array[2].id]: 2, },
        values: array
      }
    }
    const contactFound = getContactFromState(
      state, { match: {params: { id: array[1].id }}}
    );
    expect(contactFound).toBe(array[1]);
  });

  it('should remove the contact from the state', () => {
    const array = generateMockContacts(3);
    const expectedOutput = {
      index: { [array[0].id]: 0, [array[2].id]: 1 },
      values: [ array[0], array[2] ]
    };
    const newState = removeContact(array, 1);
    expect(newState).toEqual(expectedOutput);
  });
});
