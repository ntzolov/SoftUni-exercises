function cardGame(input) {
  let enumCardPower = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  let enumCardType = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  let players = {};

  for (const line of input) {
    let element = line.split(': ');
    let name = element[0];
    let cards = element[1].split(', ');
    cards = cards.filter((el, index) => cards.indexOf(el) === index);
    if (players[name]) {
      for (const card of cards) {
        if (!players[name].includes(card)) {
          players[name].push(card);
        }
      }
    } else {
      players[name] = cards;
    }
  }

  for (let player in players) {
    let sum = 0;
    for (let card of players[player]) {
      let cardInfo = card.split('');
      let cardType = cardInfo.pop();
      let cardPower = cardInfo.join('');
      let cardTypeAsNumber = enumCardType[cardType];
      let cardPowerAsNumber = enumCardPower[cardPower];
      sum += cardPowerAsNumber * cardTypeAsNumber;
    }
    console.log(`${player}: ${sum}`);
  }
}

cardGame([
  'Peter: 2C, 4H, 9H, AS, QS',
  'Tomas: 3H, 10S, JC, KD, 5S, 10S',
  'Andrea: QH, QC, QS, QD',
  'Tomas: 6H, 7S, KC, KD, 5S, 10C',
  'Andrea: QH, QC, JS, JD, JC',
  'Peter: JD, JD, JD, JD, JD, JD',
]);
