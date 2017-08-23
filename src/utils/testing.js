import faker from 'faker';
import guid from './guid';

const getFakeContact = () => ({
  id: guid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phoneNumber: faker.phone.phoneNumber(),
  address: faker.address.streetAddress(true),
  email: faker.internet.email(),
});
const generateMockContacts = (size) => (
  Array.from(new Array(size), getFakeContact)
);

export { getFakeContact, generateMockContacts };
