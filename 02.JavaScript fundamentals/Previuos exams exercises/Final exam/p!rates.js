function pirates(input) {
  let cities = [];

  class City {
    constructor(name, population, gold) {
      this.name = name;
      this.population = population;
      this.gold = gold;
    }

    plunder(people, gold) {
      this.population -= people;
      this.gold -= gold;
      console.log(
        `${this.name} plundered! ${gold} gold stolen, ${people} citizens killed.`
      );
    }

    prosper(gold) {
      if (gold > 0) {
        this.gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${this.name} now has ${this.gold} gold.`
        );
      } else {
        console.log(`Gold added cannot be a negative number!`);
      }
    }
  }

  let line = input.shift();
  while (line !== 'Sail') {
    let [name, population, gold] = line.split('||');
    population = Number(population);
    gold = Number(gold);
    let currCity = new City(name, population, gold);
    if (!cities[name]) {
      cities[name] = currCity;
    } else {
      cities[name].population += population;
      cities[name].gold += gold;
    }
    line = input.shift();
  }

  for (let line of input) {
    line = line.split('=>');
    let command = line.shift();

    if (command === 'End') {
      break;
    } else if (command === 'Plunder') {
      let [name, people, gold] = line;
      people = Number(people);
      gold = Number(gold);
      cities[name].plunder(people, gold);
      if (cities[name].population <= 0 || cities[name].gold <= 0) {
        delete cities[name];
        console.log(`${name} has been wiped off the map!`);
      }
    } else if (command === 'Prosper') {
      let [name, gold] = line;
      gold = Number(gold);
      cities[name].prosper(gold);
    }
  }

  let counter = 0;
  for (let city in cities) {
    counter++;
  }

  if (counter) {
    console.log(
      `Ahoy, Captain! There are ${counter} wealthy settlements to go to:`
    );
    for (let city in cities) {
      console.log(
        `${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`
      );
    }
  } else {
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
  }
}

pirates([
  'Nassau||95000||1000',
  'San Juan||930000||1250',
  'Campeche||270000||690',
  'Port Royal||320000||1000',
  'Port Royal||100000||2000',
  'Sail',
  'Prosper=>Port Royal=>-200',
  'Plunder=>Nassau=>94000=>750',
  'Plunder=>Nassau=>1000=>150',
  'Plunder=>Campeche=>150000=>690',
  'End',
]);
