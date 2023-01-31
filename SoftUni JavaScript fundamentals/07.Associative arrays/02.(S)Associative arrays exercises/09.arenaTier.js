function arenaTier(data) {
  let gladiators = {};

  for (let line of data) {
    if (line.includes(' -> ')) {
      line = line.split(' -> ');
      let [name, skill, power] = line;
      power = Number(power);

      if (!gladiators[name]) {
        gladiators[name] = {};
        gladiators[name][skill] = power;
      } else if (!gladiators[name][skill]) {
        gladiators[name][skill] = power;
      } else {
        let oldPower = gladiators[name][skill];
        if (power > oldPower) {
          gladiators[name][skill] = power;
        }
      }
    } else if (line.includes(' vs ')) {
      line = line.split(' vs ');
      let gladiatorA = line.shift();
      let gladiatorB = line.pop();

      for (let skillA in gladiators[gladiatorA]) {
        let isWinner = false;
        for (let skillB in gladiators[gladiatorB]) {
          if (skillA === skillB) {
            if (
              gladiators[gladiatorA][skillA] > gladiators[gladiatorB][skillB]
            ) {
              delete gladiators[gladiatorB];
              isWinner = true;
              break;
            } else if (
              gladiators[gladiatorB][skillB] > gladiators[gladiatorA][skillA]
            ) {
              delete gladiators[gladiatorA];
              isWinner = true;
              break;
            }
          }
        }
        if (isWinner) {
          break;
        }
      }
    } else if (line === 'Ave Cesar') {
      break;
    }
  }

  for (let name in gladiators) {
    let sum = 0;
    for (let skill in gladiators[name]) {
      sum += gladiators[name][skill];
    }
    gladiators[name]['totalPower'] = sum;
  }

  Object.entries(gladiators)
    .sort(
      (a, b) => b[1].totalPower - a[1].totalPower || a[0].localeCompare(b[0])
    )
    .forEach((el) => {
      console.log(`${el[0]}: ${el[1].totalPower} skill`);
      delete el[1].totalPower;
      Object.entries(el[1])
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach((el) => {
          console.log(`- ${el[0]} <!> ${el[1]}`);
        });
    });
}

arenaTier([
  'a -> a -> 3',
  'a -> b -> 3',
  'b -> a -> 2',
  'b -> b -> 2',
  'b -> a -> 0',
  'c -> a -> 4',
  'c vs a',
  'Ave Cesar',
]);
