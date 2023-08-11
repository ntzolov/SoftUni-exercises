import { expect } from 'chai';
import sum from './01.sum.js';

describe('Main test', function () {
  it('returns NaN if 1st element is not an array', () => {
    expect(sum([0, 0.1, 0.2], 0, 2)).to.closeTo(0.3, 0.00005);
  });

  it('returns 0 if startIndex is less than 0', () => {
    expect(sum([1, 1, 1], -10, 2)).to.equal(3);
  });

  it('returns last index of an array if endIndex is more than it', () => {
    expect(sum([1, 1, 1], 0, 100)).to.equal(3);
  });
});
