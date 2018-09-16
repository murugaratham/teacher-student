const { searchMentionedEmails, getEntityCount } = require('../util');

describe('searchMentionedEmails', () => {
  const mockNotification =
    'Hello students! @studentagnes@example.com @studentmiche@example.com';

  it(`should return studentagnes@example.com studentmiche@example.com
  when given ${mockNotification}`, () => {
    const received = searchMentionedEmails(mockNotification);
    const expected = ['studentagnes@example.com', 'studentmiche@example.com'];
    expect(received).toEqual(expected);
  });
});

describe('getEntityCount', () => {
  const oneEntity = 'string';
  const twoEntities = ['string', 'string'];
  const emptyArray = [];
  const emptyString = '';
  it(`should return 1 when given a string`, () => {
    const received = getEntityCount(oneEntity);
    const expected = 1;
    expect(received).toEqual(expected);
  });

  it(`should return 2 when given an array of length 2`, () => {
    const received = getEntityCount(twoEntities);
    const expected = 2;
    expect(received).toEqual(expected);
  });

  it(`should return 0 when given an array of length 0`, () => {
    const received = getEntityCount(emptyArray);
    const expected = 0;
    expect(received).toEqual(expected);
  });

  //   xit(`should return 0 when given an empty string`, () => {
  //     const received = getEntityCount(emptyString);
  //     const expected = 0;
  //     expect(received).toEqual(expected);
  //   });
});
