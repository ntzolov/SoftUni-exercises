import { expect } from 'chai';
import { carService } from './03.carService.js';

describe('Main Tests', function () {
  describe('isItExpensive', () => {
    it('works', () => {
      expect(carService.isItExpensive('Engine')).to.equal(
        'The issue with the car is more severe and it will cost more money'
      );

      expect(carService.isItExpensive('Transmission')).to.equal(
        'The issue with the car is more severe and it will cost more money'
      );
    });

    it('throws', () => {
      expect(carService.isItExpensive('Wheel')).to.equal(
        'The overall price will be a bit cheaper'
      );

      expect(carService.isItExpensive('Broken window')).to.equal(
        'The overall price will be a bit cheaper'
      );
    });
  });
  describe('discount', () => {
    it('throws', () => {
      expect(() => {
        carService.discount('5', 5);
      }).to.throw;

      expect(() => {
        carService.discount([5], 5);
      }).to.throw;

      expect(() => {
        carService.discount(5, '5');
      }).to.throw;

      expect(() => {
        carService.discount(5, [5]);
      }).to.throw;
    });
    it('works', () => {
      expect(carService.discount(1, 100)).to.equal(
        'You cannot apply a discount'
      );

      expect(carService.discount(2, 100)).to.equal(
        'You cannot apply a discount'
      );

      expect(carService.discount(3, 100)).to.equal(
        'Discount applied! You saved 15$'
      );

      expect(carService.discount(7, 100)).to.equal(
        'Discount applied! You saved 15$'
      );

      expect(carService.discount(8, 100)).to.equal(
        'Discount applied! You saved 30$'
      );
    });
  });
  describe('partsToBuy', () => {
    it('throws', () => {
      expect(() => {
        carService.partsToBuy(
          [
            { part: 'blowoff valve', price: 145 },
            { part: 'coil springs', price: 230 },
          ],
          'front window, 300'
        );
      }).to.throw;

      expect(() => {
        carService.partsToBuy(
          [
            { part: 'blowoff valve', price: 145 },
            { part: 'coil springs', price: 230 },
          ],
          { part: 'front window', price: 300 }
        );
      }).to.throw;

      expect(() => {
        carService.partsToBuy('front window, 300', [
          { part: 'blowoff valve', price: 145 },
          { part: 'coil springs', price: 230 },
        ]);
      }).to.throw;

      expect(() => {
        carService.partsToBuy({ part: 'front window', price: 300 }, [
          { part: 'blowoff valve', price: 145 },
          { part: 'coil springs', price: 230 },
        ]);
      }).to.throw;
    });
    it('works', () => {
      expect(
        carService.partsToBuy([], ['blowoff valve', 'injectors'])
      ).to.equal(0);

      expect(
        carService.partsToBuy(
          [
            { part: 'blowoff valve', price: 145 },
            { part: 'coil springs', price: 230 },
          ],
          ['blowoff valve', 'injectors']
        )
      ).to.equal(145);

      expect(
        carService.partsToBuy(
          [
            { part: 'blowoff valve', price: 145 },
            { part: 'coil springs', price: 230 },
          ],
          ['blowoff valve', 'injectors', 'coil springs']
        )
      ).to.equal(375);

      expect(
        carService.partsToBuy(
          [
            { part: 'blowoff valve', price: 145 },
            { part: 'coil springs', price: 230 },
          ],
          ['injectors']
        )
      ).to.equal(0);

      expect(
        carService.partsToBuy(
          [{ part: 'blowoff valve', price: 145 }],
          ['blowoff valve']
        )
      ).to.equal(145);
    });
  });
});
