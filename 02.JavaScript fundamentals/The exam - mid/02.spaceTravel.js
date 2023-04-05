function spaceTravel(input) {
  let ammunition = Number(input.pop());
  let fuel = Number(input.pop());

  let commands = input[0].split('||');

  for (let command of commands) {
    if (command === 'Titan') {
      break;
    }

    command = command.split(' ');
    let [action, value] = command;
    value = Number(value);

    if (action === 'Travel') {
      if (fuel >= value) {
        fuel -= value;
        console.log(`The spaceship travelled ${value} light-years.`);
      } else {
        return console.log('Mission failed.');
      }
    } else if (action === 'Enemy') {
      if (ammunition >= value) {
        ammunition -= value;
        console.log(`An enemy with ${value} armour is defeated.`);
      } else if (fuel >= value * 2) {
        fuel -= value * 2;
        console.log(`An enemy with ${value} armour is outmaneuvered.`);
      } else {
        return console.log('Mission failed.');
      }
    } else if (action === 'Repair') {
      fuel += value
      ammunition += value * 2;
      console.log(`Ammunitions added: ${value * 2}.`);
      console.log(`Fuel added: ${value}.`);
    }
  }
  console.log('You have reached Titan, all passengers are safe.');
}

spaceTravel([
  'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
  '60',
  '100',
]);
