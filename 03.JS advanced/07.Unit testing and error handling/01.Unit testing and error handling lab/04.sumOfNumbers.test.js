import { expect } from 'chai';
import sum from './04.sumOfNumbers.js';

describe('Main test', function () {
  it('has an array for argument', () => {
    expect(Array.isArray([1, 2, 3])).to.be.true;
  });

  it('sums all parameters in an array', () => {
    expect(sum([1, 2, 3])).to.equal(6);
  });

  it('sums string-like numbers from an array', () => {
    expect(sum(['1', '2'])).to.equal(3);
  });
});
