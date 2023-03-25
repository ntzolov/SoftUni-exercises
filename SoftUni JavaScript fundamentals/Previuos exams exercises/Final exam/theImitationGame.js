function theImitationGame(input) {
  let message = input.shift();

  let i = 0;
  let line = input[i];

  for (let line of input) {
    let commands = line.split('|');
    if (commands[0] === 'Decode') {
      break;
    } else if (commands[0] === 'Move') {
      message = move(message, commands[1]);
    } else if (commands[0] === 'Insert') {
      message = insert(message, commands[1], commands[2]);
    } else if (commands[0] === 'ChangeAll') {
      message = changeAll(message, commands[1], commands[2]);
    }

    i++;
    line = input[i];
  }

  function move(message, index) {
    index = Number(index);
    let slicedPart = message.slice(0, index);
    let rest = message.slice(index);
    message = rest + slicedPart;
    return message;
  }

  function insert(message, index, symbol) {
    index = Number(index);
    let firstPart = message.slice(0, index);
    let secondPart = message.slice(index);
    message = firstPart + symbol + secondPart;
    return message;
  }

  function changeAll(message, toChange, toChangeWith) {
    let newMessage = ''
    for (let i = 0; i < message.length; i++) {
      if (message[i] === toChange) {
        newMessage += toChangeWith
      } else {
        newMessage += message[i]
      }

    }
    message = newMessage
    return message
  }

  console.log(`The decrypted message is: ${message}`);
}

theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
