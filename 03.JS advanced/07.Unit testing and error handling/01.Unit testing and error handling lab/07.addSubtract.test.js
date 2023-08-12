import { expect } from 'chai';
import createCalculator from './07.addSubtract.js';

describe('Main test', function () {
  let calc = null;
  beforeEach(() => {
    calc = createCalculator();
  });

  it('it can add', () => {
    calc.add(1);
    expect(calc.get()).to.equal(1);
  });

  it('can subtract', () => {
    calc.subtract(1);
    expect(calc.get()).to.equal(-1);
  });

  it('return initial 0', () => {
    expect(calc.get()).to.equal(0);
  });

  it('can add when parameter is a string of a number', () => {
    calc.add('1');
    expect(calc.get()).to.equal(1);
  });
});
