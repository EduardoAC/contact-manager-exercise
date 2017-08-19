import faker from 'faker';

const getFakeContact = () => ({
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
