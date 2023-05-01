import { expect } from 'chai';
import { mathEnforcer } from './04.mathEnforcer.js';

describe('mathEnforcer', function () {
  describe('addFive function', () => {
    it('returns undefined if not a number passed', () => {
      expect(mathEnforcer.addFive('5')).to.equal(undefined);
    });

    it('returns passed (+)integer added 5 to it', () => {
      expect(mathEnforcer.addFive(5)).to.equal(10);
    });

    it('returns passed (-)integer added 5 to it', () => {
      expect(mathEnforcer.addFive(-5)).to.equal(0);
    });

    it('returns passed (+)float added 5 to it', () => {
      expect(mathEnforcer.addFive(1.5)).to.equal(6.5);
    });
  });
  describe('subtractTen function', () => {
    it('returns undefined if not a number passed', () => {
      expect(mathEnforcer.subtractTen('10')).to.equal(undefined);
    });

    it('returns passed (+)integer subtracted 10 of it', () => {
      expect(mathEnforcer.subtractTen(20)).to.equal(10);
    });

    it('returns passed (-)integer subtracted 10 of it', () => {
      expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
    });

    it('returns passed (-)float subtracted 10 of it', () => {
      expect(mathEnforcer.subtractTen(-0.5)).to.equal(-10.5);
    });
  });
  describe('sum function', () => {
    it('returns undefined if not a number passed', () => {
      expect(mathEnforcer.sum('1', 1)).to.equal(undefined);
      expect(mathEnforcer.sum(1, '1')).to.equal(undefined);
    });

    it('returns 2 (+)params summed', () => {
      expect(mathEnforcer.sum(1, 1)).to.equal(2);
    });

    it('returns 2 (-)params summed', () => {
      expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
    });

    it('returns (-)param and (+)param summed', () => {
      expect(mathEnforcer.sum(-1, 1)).to.equal(0);
    });

    it('returns 2 (+)float summed', () => {
      expect(mathEnforcer.sum(0.1, 0.2)).to.closeTo(0.3, 0.001);
    });
  });
});
