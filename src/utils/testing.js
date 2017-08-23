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

const mockedContactList = [
  {
    id: '90ea73a5-db19-3fb7-a6b4-539d9aa464e8',
    firstName: 'Dina',
    lastName: 'Reilly',
    phoneNumber: '760.352.1867 x6215',
    address: '81456 Elinor Mountain Suite 968',
    email: 'Ian.Dietrich@yahoo.com'
  },
  {
    id: '131a9b92-8262-65da-3f24-5e4dda80e585',
    firstName: 'Taryn',
    lastName: 'Balistreri',
    phoneNumber: '801.583.9936 x6833',
    address: '289 Durward Avenue Apt. 829',
    email: 'Grayce_Ankunding@yahoo.com'
  },
  {
    id: 'f66e59f9-194a-00f3-76fd-f52bf9852549',
    firstName: 'Otho',
    lastName: 'Wunsch',
    phoneNumber: '917.325.5149',
    address: '97636 Schroeder Place Apt. 677',
    email: 'Francis26@hotmail.com'
  },
  {
    id: '4540d64e-ada0-8b2b-a21f-cda290e3381d',
    firstName: 'Domingo',
    lastName: 'Koss',
    phoneNumber: '1-204-667-1305 x020',
    address: '885 Kuvalis Trail Apt. 081',
    email: 'Haskell_Crist57@hotmail.com'
  },
  {
    id: 'c49c69f0-f25b-a426-bdf8-0ab8bfe5eddd',
    firstName: 'Hellen',
    lastName: 'Crooks',
    phoneNumber: '030.052.9393 x678',
    address: '64858 Auer Parkways Suite 146',
    email: 'Zora94@gmail.com'
  }
];

const mockContact = mockedContactList[0];

export { getFakeContact, generateMockContacts, mockContact, mockedContactList };
