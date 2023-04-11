function townPopulation(arr) {
  const registry = {};

  for (let line of arr) {
    let [town, population] = line.split(' <-> ');
    population = Number(population);

    if (town in registry === false) {
      registry[town] = 0;
    }

    registry[town] += population;
  }

  return Object.entries(registry).map(([town, population]) => `${town} : ${population}`).join('\n')
}

console.log(
  townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
  ])
);
