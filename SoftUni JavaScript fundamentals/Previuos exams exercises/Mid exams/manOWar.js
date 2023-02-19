function manOWar(input) {
  let pirateShip = input.shift().split('>').map(Number);
  let warShip = input.shift().split('>').map(Number);
  let maxHealth = Number(input.shift());

  for (let line of input) {
    line = line.split(' ');
    let command = line.shift();

    if (command === 'Retire') {
      break;
    }

    if (command === 'Fire') {
      let [index, damage] = line.map(Number);
      if (index >= 0 && index < warShip.length) {
        warShip[index] -= damage;
        if (warShip[index] <= 0) {
          return console.log(`You won! The enemy ship has sunken.`);
        }
      }
    } else if (command === 'Defend') {
      let [startIndex, endIndex, damage] = line.map(Number);
      if (
        startIndex >= 0 &&
        endIndex >= 0 &&
        startIndex < pirateShip.length &&
        endIndex < pirateShip.length
      ) {
        for (let i = startIndex; i <= endIndex; i++) {
          pirateShip[i] -= damage;
          if (pirateShip[i] <= 0) {
            return console.log(`You lost! The pirate ship has sunken.`);
          }
        }
      }
    } else if (command === 'Repair') {
      let [index, health] = line.map(Number);
      if (index >= 0 && index < pirateShip.length) {
        pirateShip[index] += health;
        if (pirateShip[index] > maxHealth) {
          pirateShip[index] = maxHealth;
        }
      }
    } else if (command === 'Status') {
      let counter = 0;
      for (let section of pirateShip) {
        if (section < maxHealth * 0.2) {
          counter++;
        }
      }
      console.log(`${counter} sections need repair.`);
    }
  }

  let sumSectionsOfPirateShip = 0;
  let sumSectionsOfWarShip = 0;

  for (let section of pirateShip) {
    sumSectionsOfPirateShip += section;
  }

  for (let section of warShip) {
    sumSectionsOfWarShip += section;
  }
  console.log(`Pirate ship status: ${sumSectionsOfPirateShip}`);
  console.log(`Warship status: ${sumSectionsOfWarShip}`);
}

manOWar([
  '12>13>11>20>66',
  '12>22>33>44>55>32>18',
  '70',
  'Fire -1 20',
]);
