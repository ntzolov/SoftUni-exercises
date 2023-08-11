function solve(input) {
  const faces = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];

  const suits = {
    S: '\u2660',
    H: '\u2665',
    D: '\u2666',
    C: '\u2663',
  };

  const toPrint = [];

  for (let i = 0; i < input.length; i++) {
    let card;
    if (input[i].length === 2) {
      const [face, suit] = input[i].split('');
      if (!faces.includes(face) || !suits.hasOwnProperty(suit)) {
        console.log(`Invalid card: ${face}${suit}`);
        return
      }
      card = `${face}${suits[suit]}`;
    } else {
      const symbols = input[i].split('');
      const suit = symbols.pop();
      const face = symbols.join('');
      if (!faces.includes(face) || !suits.hasOwnProperty(suit)) {
        console.log(`Invalid card: ${face}${suit}`);
        return
      }
      card = `${face}${suits[suit]}`;
    }
    toPrint.push(card);
  }

  console.log(toPrint.join(' '));
}

solve(['1S', '10D', 'KH', '2C']);
