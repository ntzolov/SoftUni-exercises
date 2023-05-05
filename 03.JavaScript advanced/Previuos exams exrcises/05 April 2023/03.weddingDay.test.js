import { expect } from 'chai';
import { weddingDay } from './03.weddingDay.js';

describe('weddingDay test', function () {
  describe('pickVenue tests', () => {
    it('should return error in case of incorrect arguments', () => {
      expect(() => {
        weddingDay.pickVenue('1', 1, 'Varna');
      }).to.throw('Invalid Information!');

      expect(() => {
        weddingDay.pickVenue(1, '1', 'Varna');
      }).to.throw('Invalid Information!');

      expect(() => {
        weddingDay.pickVenue(1, '1', 'Varna');
      }).to.throw('Invalid Information!');
    });

    it('should return location error if argument is not Varna', () => {
      expect(() => {
        weddingDay
          .pickVenue(1, 1, 'Sofia')
          .to.throw('The location of this venue is not in the correct area!');
      });
    });

    it('should work properly', () => {
      expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal(
        'This venue meets the requirements, with capacity of 150 guests and 120$ cover.'
      );
    });

    it('should not work properly', () => {
      expect(weddingDay.pickVenue(149, 120, 'Varna')).to.equal(
        'This venue does not meet your requirements!'
      );
    });

    it('should not work properly 2nd test', () => {
      expect(weddingDay.pickVenue(150, 121, 'Varna')).to.equal(
        'This venue does not meet your requirements!'
      );
    });
  });

  describe('otherSpendings tests', () => {
    it('should throw error if one argument is invalid', () => {
      expect(() => {
        weddingDay
          .otherSpendings('flowers', ['pictures'], false)
          .to.throw('Invalid Information!');
      });

      expect(() => {
        weddingDay
          .otherSpendings(['flowers'], 'pictures', false)
          .to.throw('Invalid Information!');
      });

      expect(() => {
        weddingDay
          .otherSpendings(['flowers'], ['pictures'], 'false')
          .to.throw('Invalid Information!');
      });
    });

    it('works without discount', () => {
      expect(
        weddingDay.otherSpendings(
          ['flowers', 'Fabric drapes and curtains'],
          ['pictures', 'video'],
          false
        )
      ).to.equal('You spend 2900$ for wedding decoration and photography!');
    });

    it('works with discount', () => {
      expect(
        weddingDay.otherSpendings(
          ['flowers', 'Fabric drapes and curtains'],
          ['pictures', 'video'],
          true
        )
      ).to.equal(
        'You spend 2465$ for wedding decoration and photography with 15% discount!'
      );
    });
  });

  describe('tableDistribution tests', () => {
    it('throws error if negative number or incorrect input', () => {
      expect(() => {
        weddingDay.tableDistribution(-1, 1).to.throw('Invalid Information!');
      });

      expect(() => {
        weddingDay.tableDistribution(1, -1).to.throw('Invalid Information!');
      });

      expect(() => {
        weddingDay.tableDistribution('1', 1).to.throw('Invalid Information!');
      });

      expect(() => {
        weddingDay.tableDistribution(1, '1').to.throw('Invalid Information!');
      });
    });

    it('works properly', () => {
      expect(weddingDay.tableDistribution(10, 2)).to.equal(
        'There is only 5 people on every table, you can join some tables.'
      );

      expect(weddingDay.tableDistribution(20, 2)).to.equal(
        'You have 2 tables with 10 guests on table.'
      );
    });
  });
});
