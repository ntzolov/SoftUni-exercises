import { expect } from 'chai';
import lookupChar from './03.charLookup.js';

describe('Main test', function () {
  it('returns undefined if 1st param is not a string', () => {
    expect(lookupChar(111, 1)).to.equal(undefined);
  });

  it('returns undefined if 2nd param is not an integer', () => {
    expect(lookupChar('string', 1.5)).to.equal(undefined);
  });

  it('returns incorrect index when 2nd param is more than string.length', () => {
    expect(lookupChar('string', 6)).to.equal('Incorrect index');
  });

  it('returns incorrect index when 2nd param is less than 0', () => {
    expect(lookupChar('string', -1)).to.equal('Incorrect index');
  });

  it('returns the char at the given index of string', () => {
    expect(lookupChar('string', 1)).to.equal('t');
  });
});
