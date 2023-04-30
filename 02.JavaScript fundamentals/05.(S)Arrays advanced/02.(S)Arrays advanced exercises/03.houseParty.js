function houseParty(array) {
  let listParty = [];

  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(' ');
    if (command.includes('not')) {
      if (listParty.includes(command[0])) {
        let indexName = listParty.indexOf(command[0]);
        listParty.splice(indexName, 1);
      } else {
        console.log(`${command[0]} is not in the list!`);
      }
    } else {
      if (!listParty.includes(command[0])) {
        listParty.push(command[0]);
      } else {
        console.log(`${command[0]} is already in the list!`);
      }
    }
  }
  console.log(listParty.join('\n'));
}

houseParty([
  'Tom is going!',
  'Annie is going!',
  'Tom is going!',
  'Garry is going!',
  'Jerry is going!',
]);
