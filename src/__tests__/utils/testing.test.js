import { getFakeContact, generateMockContacts } from '../../utils/testing';

const testContactDefinition = (contact) => {
  expect(contact.firstName).toBeDefined();
  expect(contact.lastName).toBeDefined();
  expect(contact.address).toBeDefined();
  expect(contact.email).toBeDefined();
}
describe('Testing tooling', () => {
  describe('getFakeContact', () => {
    it('should contain contact information', () => {
      testContactDefinition(getFakeContact());
    });
  });
  describe('generateMockContacts', () => {
    let contactList;
    beforeAll(() => {
      contactList = generateMockContacts(3);
    });
    it('should generate a list of 3 contacts', () => {
      expect(contactList).toHaveLength(3)
    });
    it('should contains all contacts same information', () => {
      contactList.forEach((contact) => {
        testContactDefinition(contact);
      });
    });
  });
})
