import { expect } from "chai";
import { findNewApartment } from "./03.findApartment.js";

describe('Main test', function () {
  describe('isGoodLocation', () => {
    it('diff city', () => {
      expect(
        findNewApartment.isGoodLocation('Lom', true)
      ).to.equal('This location is not suitable for you.');
    })

    it('false bool', () => {
      expect(
        findNewApartment.isGoodLocation('Sofia', false)
      ).to.equal('There is no public transport in area.');
    })

    it('works', () => {
      expect(
        findNewApartment.isGoodLocation('Sofia', true)
      ).to.equal('You can go on home tour!');
    })

    it('throw an error if not correct inputs', () => {
      expect(() => {
        findNewApartment.isGoodLocation(5, true)
      }).to.throw;

      expect(() => {
        findNewApartment.isGoodLocation(false, true)
      }).to.throw;

      expect(() => {
        findNewApartment.isGoodLocation('Sofia', 5)
      }).to.throw;

      expect(() => {
        findNewApartment.isGoodLocation('Sofia', 'false')
      }).to.throw;
    })
  })

  describe('isLargeEnough', () => {
    it('throws an error invalid inputs', () => {
      expect(() => {
        findNewApartment.isLargeEnough([10, 20], '5')
      }).to.throw

      expect(() => {
        findNewApartment.isLargeEnough('10', 5)
      }).to.throw

      expect(() => {
        findNewApartment.isLargeEnough([], 5)
      }).to.throw
    })

    it('works', () => {
      expect(findNewApartment.isLargeEnough([10, 20, 30, 40], 30)).to.equal('30, 40')
    })
  })

  describe('isItAffordable', () => {
    it('throws error not valid', () => {
      expect(() => {
        findNewApartment.isItAffordable('5', 5)
      }).to.throw

      expect(() => {
        findNewApartment.isItAffordable(5, '5')
      }).to.throw

      expect(() => {
        findNewApartment.isItAffordable(0, 5)
      }).to.throw

      expect(() => {
        findNewApartment.isItAffordable(5, -1)
      }).to.throw
    })

    it('works', () => {
      expect(findNewApartment.isItAffordable(10, 5)).to.equal('You don\'t have enough money for this house!')

      expect(findNewApartment.isItAffordable(5, 10)).to.equal('You can afford this home!')
    })
  })
})
