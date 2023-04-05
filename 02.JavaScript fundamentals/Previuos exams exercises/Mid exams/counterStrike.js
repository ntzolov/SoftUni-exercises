function counterStrike(moves) {
  let energy = moves.shift();
  let winCount = 0;
  let currWinCount = 0;

  for (let move of moves) {
    if (energy - +move < 0) {
      return console.log(
        `Not enough energy! Game ends with ${winCount} won battles and ${energy} energy`
      );
    } else if (move === 'End of battle') {
      return console.log(`Won battles: ${winCount}. Energy left: ${energy}`);
    } else {
      energy -= +move;
      winCount++;
      currWinCount++;
    }
    if (currWinCount === 3) {
      energy += winCount;
      currWinCount = 0;
    }
  }
}

counterStrike((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
);
