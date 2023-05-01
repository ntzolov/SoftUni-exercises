import { expect } from 'chai';
import isSymmetric from './05.checkForSymetry.js';

describe('Main test', function () {
  it('takes only array for argument', () => {
    expect(isSymmetric('1221')).to.be.false;
  });

  it('takes only array for argument 2', () => {
    expect(isSymmetric(1221)).to.be.false;
  });

  it('returns true if array is symmetric', () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });

  it('returns false if array is non symmetric', () => {
    expect(isSymmetric([1, 1, 2, 1])).to.be.false;
  });

  it('returns true if array length is odd', () => {
    expect(isSymmetric([1, 2, 1])).to.be.true;
  });

  it('returns false when mixed types in array', () => {
    expect(isSymmetric([1, 2, '1'])).to.be.false;
  });
});
