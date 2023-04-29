function armies(input) {
  let armies = {};

  for (let line of input) {
    if (line.includes('arrives')) {
      let leader = line.split(' arrives').filter((el) => el.length > 0);
      armies[leader] = {};
    } else if (line.includes(':')) {
      let [leader, ...rest] = line.split(': ').filter((el) => el.length > 0);
      let [army, people] = rest.join('').split(', ');
      people = Number(people);
      if (armies[leader]) {
        armies[leader][army] = people;
      }
    } else if (line.includes('+')) {
      let [army, people] = line.split(' + ');
      people = Number(people);
      for (let key in armies) {
        if (armies[key][army]) {
          armies[key][army] += people;
        }
      }
    } else if (line.includes('defeated')) {
      let leader = line.split(' defeated').filter((el) => el.length > 0);
      for (let key in armies) {
        if (armies[leader]) {
          delete armies[leader];
        }
      }
    }
  }

  const sortedArmies = Object.entries(armies).sort(armiesSort);

  for (let [leader, army] of sortedArmies) {
    let totalArmy = Object.values(army).reduce((sum, army) => sum + army, 0);
    console.log(`${leader}: ${totalArmy}`);

    let sortedArmy = Object.entries(army).sort((a, b) => b[1] - a[1]);
    for (let [name, people] of sortedArmy) {
      console.log(`>>> ${name} - ${people}`);
    }
  }

  function armiesSort(a, b) {
    let [leaderA, armyA] = a;
    let [leaderB, armyB] = b;

    let totalArmyA = Object.values(armyA).reduce((sum, army) => sum + army, 0);
    let totalArmyB = Object.values(armyB).reduce((sum, army) => sum + army, 0);

    return totalArmyB - totalArmyA;
  }
}

armies([
  'Rick Burr arrives',
  'Fergus: Wexamp, 30245',
  'Rick Burr: Juard, 50000',
  'Findlay arrives',
  'Findlay: Britox, 34540',
  'Wexamp + 6000',
  'Juard + 1350',
  'Britox + 4500',
  'Porter arrives',
  'Porter: Legion, 55000',
  'Legion + 302',
  'Rick Burr defeated',
  'Porter: Retix, 300205',
]);
