function theImitationGame(input) {
  let message = input.shift().split('');

  let i = 0;
  let line = input[i];

  while (line !== 'Decode') {
    let commands = line.split('|');
    if (commands[0] === 'Move') {
      move(commands[1]);
    } else if (commands[0] === 'Insert') {
      insert(commands[1], commands[2]);
    } else if (commands[0] === 'ChangeAll') {
      changeAll(commands[1], commands[2]);
    }

    i++;
    line = input[i];
  }

  function move(moves) {
    moves = Number(moves);
    for (let i = 0; i < moves; i++) {
      let tempLetter = message.shift();
      message.push(tempLetter);
    }
  }

  function insert(index, symbol) {
    index = Number(index);
    message.splice(index, 0, symbol);
  }

  function changeAll(toChange, toChangeWith) {
    for (let i = 0; i < message.length; i++) {
      if (message[i] === toChange) {
        message.splice(i, 1, toChangeWith);
      }
    }
  }

  console.log(`The decrypted message is: ${message.join('')}`);
}

theImitationGame([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode',
]);
