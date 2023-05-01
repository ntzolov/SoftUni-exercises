function playingCards(face, suit) {

  
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
  const suits = ['S', 'H', 'D', 'C'];

  const obj = {
    face,
    suit,
  };

  console.table(obj);
}

playingCards('A', 'S');
