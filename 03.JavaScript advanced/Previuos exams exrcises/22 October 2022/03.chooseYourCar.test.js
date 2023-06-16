import { expect } from 'chai';
import { chooseYourCar } from './03.chooseYourCar.js';

describe('Main tests', function () {
  describe('choosingType', () => {
    it('throws', () => {
      expect(() => {
        chooseYourCar.choosingType('Sedan', 'red', 1899);
      }).to.throw;

      expect(() => {
        chooseYourCar.choosingType('Sedan', 'red', 2023);
      }).to.throw;

      expect(() => {
        chooseYourCar.choosingType('Cabriolet', 'red', 2000);
      }).to.throw;
    });

    it('works', () => {
      expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal(
        'This red Sedan meets the requirements, that you have.'
      );

      expect(chooseYourCar.choosingType('Sedan', 'red', 2005)).to.equal(
        'This Sedan is too old for you, especially with that red color.'
      );
    });
  });
  describe('brandName', () => {
    it('throws', () => {
      expect(() => {
        chooseYourCar.brandName('Toyota', 0);
      }).to.throw;

      expect(() => {
        chooseYourCar.brandName(['Toyota', 'BMW', 'Mercedes'], '0');
      }).to.throw;

      expect(() => {
        chooseYourCar.brandName(['Toyota', 'BMW', 'Mercedes'], -1);
      }).to.throw;

      expect(() => {
        chooseYourCar.brandName(['Toyota'], 1);
      }).to.throw;
    });

    it('works', () => {
      expect(
        chooseYourCar.brandName(['Toyota', 'BMW', 'Mercedes'], 0)
      ).to.equal('BMW, Mercedes');

      expect(
        chooseYourCar.brandName(['Toyota', 'BMW', 'Mercedes'], 2)
      ).to.equal('Toyota, BMW');

      expect(chooseYourCar.brandName(['BMW', 'Mercedes'], 0)).to.equal(
        'Mercedes'
      );

      expect(chooseYourCar.brandName(['BMW'], 0)).to.equal('');
    });
  });
  describe('carFuelConsumption', () => {
    it('throws', () => {
      expect(() => {
        chooseYourCar.carFuelConsumption(-1, 1);
      }).to.throw;

      expect(() => {
        chooseYourCar.carFuelConsumption(1, -1);
      }).to.throw;

      expect(() => {
        chooseYourCar.carFuelConsumption(-1, -1);
      }).to.throw;

      expect(() => {
        chooseYourCar.carFuelConsumption('1', 1);
      }).to.throw;

      expect(() => {
        chooseYourCar.carFuelConsumption(1, 'Java');
      }).to.throw;

      expect(() => {
        chooseYourCar.carFuelConsumption('1', '1');
      }).to.throw;
    });
    it('works', () => {
      expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal(
        'The car is efficient enough, it burns 7.00 liters/100 km.'
      );

      expect(chooseYourCar.carFuelConsumption(100, 6)).to.equal(
        'The car is efficient enough, it burns 6.00 liters/100 km.'
      );

      expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal(
        'The car burns too much fuel - 8.00 liters!'
      );
    });
  });
});
