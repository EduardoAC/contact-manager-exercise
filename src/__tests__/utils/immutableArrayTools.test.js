import {
  insertItem,
  updateObjectInArray,
} from '../../utils/immutableArrayTools';
import { getFakeContact, generateMockContacts } from '../../utils/testing';

describe('immutableArrayTools functions', () => {
  it('should insert the new item in a copy of the array passed', () => {
    const array = generateMockContacts(2);
    const contact = getFakeContact();
    const arrayResult = insertItem(array, contact);
    const expectedResult = [].concat(array, [contact]);
    expect(arrayResult).not.toBe(expectedResult);
    expect(arrayResult).toEqual(expectedResult);
  });

  it('should insert the new item in a copy of the array passed', () => {
    const array = generateMockContacts(3);
    const contact = getFakeContact();
    const arrayResult = updateObjectInArray(array, contact, 1);
    const expectedResult = [ array[0], contact, array[2]];
    expect(arrayResult).not.toBe(expectedResult);
    expect(arrayResult).toEqual(expectedResult);
  });
})
