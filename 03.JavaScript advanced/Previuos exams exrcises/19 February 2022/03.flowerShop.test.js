import { expect } from 'chai';
import { flowerShop } from './03.flowerShop.js';

describe('Main tests', function () {
  describe('calcPriceOfFlowers', () => {
    it('throws an error for invalid inputs', () => {
      expect(() => {
        flowerShop.calcPriceOfFlowers(['Mac'], 5, 1);
      }).to.throw;

      expect(() => {
        flowerShop.calcPriceOfFlowers(1, 5, 1);
      }).to.throw;

      expect(() => {
        flowerShop.calcPriceOfFlowers('Mac', '5', 1);
      }).to.throw;

      expect(() => {
        flowerShop.calcPriceOfFlowers('Mac', 5, '1');
      }).to.throw;
    });

    it('works', () => {
      expect(flowerShop.calcPriceOfFlowers('Mac', 5, 1)).to.equal(
        `You need $5.00 to buy Mac!`
      );
    });
  });

  describe('checkFlowersAvailable', () => {
    it('doesnt work', () => {
      expect(
        flowerShop.checkFlowersAvailable('Mac', ['Rose', 'Lily'])
      ).to.equal('The Mac are sold! You need to purchase more!');
    });

    it('work', () => {
      expect(
        flowerShop.checkFlowersAvailable('Mac', ['Rose', 'Lily', 'Mac'])
      ).to.equal('The Mac are available!');
    });
  });

  describe('sellFlowers', () => {
    it('throws an error for invalid inputs', () => {
      expect(() => {
        flowerShop.sellFlowers('Rose', 0);
      }).to.throw;
    });

    it('throws an error for invalid inputs', () => {
      expect(() => {
        flowerShop.sellFlowers(['Rose'], '0');
      }).to.throw;
    });

    it('works', () => {
      expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Mac'], 1)).to.equal(
        'Rose / Mac'
      );
    });
  });
});
