function playingCards(face, suit) {
  face = face.toUpperCase();
  suit = suit.toUpperCase();

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

  if (!faces.includes(face)) {
    throw new Error('Error');
  }

  return {
    face: face,
    suit: suit,
    toString() {
      return `${face}${suits[suit]}`;
    },
  };
}

playingCards('10', 'h');
