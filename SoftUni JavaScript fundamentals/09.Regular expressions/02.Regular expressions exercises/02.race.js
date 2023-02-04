function race(input) {
  let racers = input.shift().split(', ');
  let findLetter = /[A-Za-z]/;
  let findNumber = /\d/;
  let name = '';
  let distance = 0;
  let result = {};

  let command = input.shift();
  while (command !== 'end of race') {
    for (let symbol of command) {
      if (findLetter.test(symbol)) {
        name += symbol;
      }
      if (findNumber.test(symbol)) {
        distance += +symbol;
      }
    }
    if (racers.includes(name)) {
      if (!result[name]) {
        result[name] = distance;
      } else {
        result[name] += distance;
      }
    }
    name = '';
    distance = 0;

    command = input.shift();
  }

  let sortedRacers = Object.entries(result).sort((a, b) => b[1] - a[1]);
  console.log(`1st place: ${sortedRacers[0][0]}`);
  console.log(`2nd place: ${sortedRacers[1][0]}`);
  console.log(`3rd place: ${sortedRacers[2][0]}`);
}

race([
  'George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@ ',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race',
]);
