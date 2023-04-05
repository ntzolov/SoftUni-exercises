function thePianist(data) {
  let pieces = Number(data.shift());
  let items = {};

  for (let i = 0; i < pieces; i++) {
    let line = data.shift().split('|');
    let [name, author, key] = line;

    items[name] = [author, key];
  }

  for (let line of data) {
    line = line.split('|');
    let command = line.shift();

    if (command === 'Stop') {
      break;
    }

    if (command === 'Add') {
      let [name, author, key] = line;
      if (!items[name]) {
        items[name] = [author, key];
        console.log(`${name} by ${author} in ${key} added to the collection!`);
      } else {
        console.log(`${name} is already in the collection!`);
      }
    } else if (command === 'Remove') {
      let name = line;
      if (items[name]) {
        delete items[name];
        console.log(`Successfully removed ${name}!`);
      } else {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      }
    } else if (command === 'ChangeKey') {
      let [name, key] = line;
      if (items[name]) {
        items[name][1] = key;
        console.log(`Changed the key of ${name} to ${key}!`);
      } else {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      }
    }
  }

  for (let name in items) {
    console.log(
      `${name} -> Composer: ${items[name][0]}, Key: ${items[name][1]}`
    );
  }
}

thePianist([
  '1',
  'a|a|a',
  'Remove|a',
  'Add|b|b|b',
  'Add|b|b|b',
  'ChangeKey|a|b',
  'Stop',
]);
