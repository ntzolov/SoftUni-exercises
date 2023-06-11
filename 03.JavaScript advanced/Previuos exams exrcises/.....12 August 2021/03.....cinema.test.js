import { expect } from 'chai';
import { cinema } from './03.cinema.js';

describe('Main tests', function () {
  describe('showMovies', () => {
    it('return movies', () => {
      expect(cinema.showMovies(['King Kong', 'Gladiator'])).to.equal(
        'King Kong, Gladiator'
      );
    });

    it('return one movie', () => {
      expect(cinema.showMovies(['Pulp Fiction'])).to.equal('Pulp Fiction');
    });

    it('return no movies', () => {
      expect(cinema.showMovies([])).to.equal(
        'There are currently no movies to show.'
      );
    });
  });
  describe('ticketPrice', () => {
    it('throws', () => {
      expect(() => {
        cinema.ticketPrice('Premiera');
      }).to.throw;
    });

    it('return correct price', () => {
      expect(cinema.ticketPrice('Premiere')).to.equal(12);
    });
  });
  describe('swapSeatsInHall', () => {
    it('return unsuccessful operation', () => {
      expect(cinema.swapSeatsInHall(1, 21)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });

    it('return unsuccessful operation', () => {
      expect(cinema.swapSeatsInHall(21, 1)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });

    it('return unsuccessful operation', () => {
      expect(cinema.swapSeatsInHall(1.5, 2)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });

    it('return unsuccessful operation', () => {
      expect(cinema.swapSeatsInHall(1, 2.5)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });

    it('return unsuccessful operation', () => {
      expect(cinema.swapSeatsInHall(1, 2.5)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });

    it('return unsuccessful operation', () => {
      expect(cinema.swapSeatsInHall(1, 1)).to.equal(
        'Unsuccessful change of seats in the hall.'
      );
    });
  });
});
