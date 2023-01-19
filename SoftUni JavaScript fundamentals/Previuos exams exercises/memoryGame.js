function memoryGame(array) {
  let symbols = array.shift().split(' ');
  let moves = 0;
  let i = 0;
  
  do {
    let command = array[i].split(' ');
    let index1 = Number(command[0]);
    let index2 = Number(command[1]);
    moves++;

    if (
      index1 === index2 ||
      index1 < 0 ||
      index2 < 0 ||
      index1 > symbols.length - 1 ||
      index2 > symbols.length - 1
    ) {
      let indexToSplice = symbols.length / 2;
      symbols.splice(indexToSplice, 0, `-${moves}a`, `-${moves}a`);
      console.log('Invalid input! Adding additional elements to the board');
      i++;
      continue;
    }

    if (symbols[index1] !== symbols[index2]) {
      console.log('Try again!');
      i++;
      continue;
    }

    if (symbols[index1] === symbols[index2]) {
      console.log(
        `Congrats! You have found matching elements - ${symbols[index1]}!`
      );
      let spliceFirst = Math.max(index1, index2);
      let spliceSecond = Math.min(index1, index2);
      symbols.splice(spliceFirst, 1);
      symbols.splice(spliceSecond, 1);
    }

    if (symbols.length === 0) {
      console.log(`You have won in ${moves} turns!`);
      break;
    }

    i++;
  } while (array[i] !== 'end');

  if (symbols.length > 0) {
    console.log('Sorry you lose :(');
    console.log(symbols.join(' '));
  }
}

memoryGame(['a 2 4 a 2 4', '4 0', '0 2', '0 1', '0 1', 'end']);
