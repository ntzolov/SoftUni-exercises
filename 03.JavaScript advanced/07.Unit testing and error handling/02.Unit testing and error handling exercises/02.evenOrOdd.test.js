import { expect } from 'chai';
import isOddOrEven from './02.evenOrOdd.js';

describe('Main test', function () {
  it('returns undefined when parameter is a number', () => {
    expect(isOddOrEven(123)).to.equal(undefined);
  });

  it('returns undefined when parameter is an array', () => {
    expect(isOddOrEven([1, 2, 3])).to.equal(undefined);
  });

  it('returns even when string has even symbols', () => {
    expect(isOddOrEven('1234')).to.equal('even');
  });

  it('returns odd when string has odd symbols', () => {
    expect(isOddOrEven('123')).to.equal('odd');
  });

  it('overload 1', () => {
    expect(isOddOrEven('this is a string')).to.equal('even');
  });

  it('overload 2', () => {
    expect(isOddOrEven('1234abcd')).to.equal('even');
  });

  it('overload 3', () => {
    expect(isOddOrEven('odd')).to.equal('odd');
  });

  it('overload 4', () => {
    expect(isOddOrEven('oddoddodd')).to.equal('odd');
  });
});
