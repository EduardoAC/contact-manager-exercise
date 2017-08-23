import guid from '../../utils/guid';

describe('guid function', () => {
  it('should different values every time is called', () => {
    expect(guid()).not.toBe(guid());
  });

  it('should match the guid representation for the id', () => {
    expect(guid()).toMatch(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/);
  });
});
