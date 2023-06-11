import { expect } from 'chai';
import { motorcycleRider } from './03.motorcycleRider.js';

describe('Main tests', function () {
  describe('licenseRestriction', () => {
    it('bad input fail', () => {
      expect(() => {
        motorcycleRider.licenseRestriction('UFC');
      }).to.throw;
    });

    it('bad input fail', () => {
      expect(() => {
        motorcycleRider.licenseRestriction('A');
      }).to.throw;
    });

    it('works', () => {
      expect(motorcycleRider.licenseRestriction('AM')).to.equal(
        'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.'
      );
    });

    it('works', () => {
      expect(motorcycleRider.licenseRestriction('A1')).to.equal(
        'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.'
      );
    });

    it('works', () => {
      expect(motorcycleRider.licenseRestriction('A2')).to.equal(
        'Motorcycles with maximum power of 35KW. and the minimum age is 18.'
      );
    });

    it('works', () => {
      expect(motorcycleRider.licenseRestriction('A')).to.equal(
        'No motorcycle restrictions, and the minimum age is 24.'
      );
    });
  });
  describe('motorcycleShowroom', () => {
    it('bad inputs', () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom(500, 500);
      }).to.throw;
    });

    it('bad inputs', () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom([500], '500');
      }).to.throw;
    });

    it('bad inputs', () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom([], 500);
      }).to.throw;
    });

    it('bad inputs', () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom([500], 25);
      }).to.throw;
    });

    it('works', () => {
      expect(motorcycleRider.motorcycleShowroom([100, 200, 300], 250)).to.equal(
        'There are 2 available motorcycles matching your criteria!'
      );
    });
  });
  describe('otherSpendings', () => {
    it('bad inputs', () => {
      expect(() => {
        motorcycleRider.otherSpendings('helmet', ['engine oil'], false);
      }).to.throw;
    });

    it('bad inputs', () => {
      expect(() => {
        motorcycleRider.otherSpendings(['helmet'], 'engine oil', false);
      }).to.throw;
    });

    it('bad inputs', () => {
      expect(() => {
        motorcycleRider.otherSpendings(['helmet'], ['engine oil'], 'false');
      }).to.throw;
    });

    it('works', () => {
      expect(
        motorcycleRider.otherSpendings(
          ['helmet', 'jacked'],
          ['engine oil', 'oil filter'],
          false
        )
      ).to.equal('You spend $600.00 for equipment and consumables!');
    });

    it('works', () => {
      expect(
        motorcycleRider.otherSpendings(
          ['helmet', 'jacked'],
          ['engine oil', 'oil filter'],
          true
        )
      ).to.equal('You spend $540.00 for equipment and consumables with 10% discount!');
    });
  });
});
