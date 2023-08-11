import { expect } from 'chai';
import { movieTheater } from './03.movieTheater.js';

describe('Main tests', function () {
  describe('ageRestrictions', () => {
    it('works', () => {
      expect(movieTheater.ageRestrictions('G')).to.equal(
        'All ages admitted to watch the movie'
      );

      expect(movieTheater.ageRestrictions('PG')).to.equal(
        'Parental guidance suggested! Some material may not be suitable for pre-teenagers'
      );

      expect(movieTheater.ageRestrictions('R')).to.equal(
        'Restricted! Under 17 requires accompanying parent or adult guardian'
      );

      expect(movieTheater.ageRestrictions('NC-17')).to.equal(
        'No one under 17 admitted to watch the movie'
      );
    });
    it('error', () => {
      expect(movieTheater.ageRestrictions('GP')).to.equal(
        'There are no age restrictions for this movie'
      );
    });
  });
  describe('moneySpent', () => {
    it('throws', () => {
      expect(() => {
        movieTheater.moneySpent('1', ['Nachos', 'Popcorn'], ['Soda', 'Water']);
      }).to.throw;

      expect(() => {
        movieTheater.moneySpent(1, 'Nachos', ['Soda', 'Water']);
      }).to.throw;

      expect(() => {
        movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], 'Water');
      }).to.throw;
    });
    it('works', () => {
      expect(
        movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], ['Soda', 'Water'])
      ).to.equal('The total cost for the purchase is 29.50');

      expect(
        movieTheater.moneySpent(4, ['Nachos', 'Popcorn'], ['Soda', 'Water'])
      ).to.equal(
        'The total cost for the purchase with applied discount is 59.60'
      );
    });
  });
  describe('reservation', () => {
    it('throws', () => {
      expect(() => {
        movieTheater.reservation({ rowNumber: 1, freeSeats: 7 }, 5);
      }).to.throw;

      expect(() => {
        movieTheater.reservation('{ rowNumber: 1, freeSeats: 7 }', 5);
      }).to.throw;

      expect(() => {
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
            { rowNumber: 3, freeSeats: 11 },
          ],
          '5'
        );
      }).to.throw;

      expect(() => {
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
            { rowNumber: 3, freeSeats: 11 },
          ],
          0
        );
      }).to.throw;

      expect(() => {
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
            { rowNumber: 3, freeSeats: 11 },
          ],
          -1
        );
      }).to.throw;

      expect(() => {
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
            { rowNumber: 3, freeSeats: 11 },
          ],
          12
        );
      }).to.throw;
    });
    it('works', () => {
      expect(
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
            { rowNumber: 3, freeSeats: 11 },
          ],
          5
        )
      ).to.equal(3);
    });
  });
});
