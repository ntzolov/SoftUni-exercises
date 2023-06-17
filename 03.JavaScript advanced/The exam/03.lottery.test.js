import { expect } from 'chai';
import { lottery } from './03.lottery.js';

describe('Main tests', function () {
  describe('buyLotteryTicket', () => {
    it('throws', () => {
      expect(() => {
        lottery.buyLotteryTicket('1', 1, true);
      }).to.throw;

      expect(() => {
        lottery.buyLotteryTicket([1], 1, true);
      }).to.throw;

      expect(() => {
        lottery.buyLotteryTicket(['1'], 1, true);
      }).to.throw;

      expect(() => {
        lottery.buyLotteryTicket(1, '1', true);
      }).to.throw;

      expect(() => {
        lottery.buyLotteryTicket(1, [1], true);
      }).to.throw;

      expect(() => {
        lottery.buyLotteryTicket(1, ['1'], true);
      }).to.throw;

      expect(() => {
        lottery.buyLotteryTicket(1, 1, 'true');
      }).to.throw;

      expect(() => {
        lottery.buyLotteryTicket(1, 1, ['true']);
      }).to.throw;

      expect(() => {
        lottery.buyLotteryTicket(1, 1, [true]);
      }).to.throw;

      expect(() => {
        lottery.buyLotteryTicket(1, 1, false);
      }).to.throw('Unable to buy lottery ticket!');

      expect(() => {
        lottery.buyLotteryTicket(0, 1, true);
      }).to.throw;

      expect(() => {
        lottery.buyLotteryTicket(1, 0, true);
      }).to.throw;

      expect(() => {
        lottery.buyLotteryTicket(1, 1.5, true);
      }).to.throw;

      expect(() => {
        lottery.buyLotteryTicket(0.5, 1.5, true);
      }).to.throw;
    });
    it('works', () => {
      expect(lottery.buyLotteryTicket(1, 1, true)).to.equal(
        'You bought 1 tickets for 1$.'
      );

      expect(lottery.buyLotteryTicket(0.5, 1, true)).to.equal(
        'You bought 1 tickets for 0.5$.'
      );

      expect(lottery.buyLotteryTicket(0.5, 2, true)).to.equal(
        'You bought 2 tickets for 1$.'
      );

      expect(lottery.buyLotteryTicket(2, 2, true)).to.equal(
        'You bought 2 tickets for 4$.'
      );

      expect(lottery.buyLotteryTicket(0.33, 2, true)).to.equal(
        'You bought 2 tickets for 0.66$.'
      );
    });
  });
  describe('checkTicket', () => {
    it('throws', () => {
      expect(() => {
        lottery.checkTicket(['1', '2', '3', '4', '5', '6'], [1, 2, 3, 4, 5, 6]);
      }).to.throw;

      expect(() => {
        lottery.checkTicket(5, [1, 2, 3, 4, 5, 6]);
      }).to.throw;

      expect(() => {
        lottery.checkTicket('1, 2, 3, 4, 5, 6', [1, 2, 3, 4, 5, 6]);
      }).to.throw;

      expect(() => {
        lottery.checkTicket([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6]);
      }).to.throw;

      expect(() => {
        lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]);
      }).to.throw;

      expect(() => {
        lottery.checkTicket([], [1, 2, 3, 4, 5, 6]);
      }).to.throw;

      expect(() => {
        lottery.checkTicket([1, 2, 3, 4, 5, 6], ['1', '2', '3', '4', '5', '6']);
      }).to.throw;

      expect(() => {
        lottery.checkTicket(true, [1, 2, 3, 4, 5, 6]);
      }).to.throw;

      expect(() => {
        lottery.checkTicket([1, 2, 3, 4, 5, 6], 5);
      }).to.throw;

      expect(() => {
        lottery.checkTicket([1, 2, 3, 4, 5, 6], '1, 2, 3, 4, 5, 6');
      }).to.throw;

      expect(() => {
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7]);
      }).to.throw;

      expect(() => {
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]);
      }).to.throw;

      expect(() => {
        lottery.checkTicket([1, 2, 3, 4, 5, 6], []);
      }).to.throw;

      expect(() => {
        lottery.checkTicket([1, 2, 3, 4, 5, 6], true);
      }).to.throw;

      expect(() => {
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 7, 8, 9, 10]);
      }).to.throw;

      expect(() => {
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 11, 7, 8, 9, 10]);
      }).to.throw;

      expect(() => {
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]);
      }).to.throw;
    });
    it('works', () => {
      expect(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 7])
      ).to.equal('Congratulations you win, check your reward!');

      expect(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 7, 8])
      ).to.equal('Congratulations you win, check your reward!');

      expect(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9])
      ).to.equal('Congratulations you win, check your reward!');

      expect(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])
      ).to.equal('You win the JACKPOT!!!');
    });
  });
  describe('secondChance', () => {
    it('throws', () => {
      expect(() => {
        lottery.secondChance('12345', [12345, 54321]);
      }).to.throw;

      expect(() => {
        lottery.secondChance([12345], [12345, 54321]);
      }).to.throw;

      expect(() => {
        lottery.secondChance(['12345'], [12345, 54321]);
      }).to.throw;

      expect(() => {
        lottery.secondChance(true, [12345, 54321]);
      }).to.throw;

      expect(() => {
        lottery.secondChance(12345, 12345);
      }).to.throw;

      expect(() => {
        lottery.secondChance(12345, '12345');
      }).to.throw;

      expect(() => {
        lottery.secondChance(12345, true);
      }).to.throw;
    });
    it('works', () => {
      expect(lottery.secondChance(12345, [12345, 54321])).to.equal(
        'You win our second chance prize!'
      );

      expect(lottery.secondChance(12345, [54321, 12345])).to.equal(
        'You win our second chance prize!'
      );

      expect(lottery.secondChance(12345, ['54321', 12345])).to.equal(
        'You win our second chance prize!'
      );

      expect(lottery.secondChance(12345, ['12345', '54321'])).to.equal(
        "Sorry, your ticket didn't win!"
      );

      expect(lottery.secondChance(12345, [23456, 54321])).to.equal(
        "Sorry, your ticket didn't win!"
      );

      expect(lottery.secondChance(12345, [])).to.equal(
        "Sorry, your ticket didn't win!"
      );
    });
  });
});
