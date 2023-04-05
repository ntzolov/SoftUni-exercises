function inventory(input) {
  let collectedItems = input.shift().split(', ');

  let command = input.shift();
  while (command !== 'Craft!') {
    let [action, item] = command.split(' - ');
    if (action === 'Collect') {
      if (!collectedItems.includes(item)) {
        collectedItems.push(item);
      }
    } else if (action === 'Drop') {
      if (collectedItems.includes(item)) {
        let index = collectedItems.indexOf(item);
        collectedItems.splice(index, 1);
      }
    } else if (action === 'Combine Items') {
      let [oldItem, newItem] = item.split(':');
      if (collectedItems.includes(oldItem)) {
        let index = collectedItems.indexOf(oldItem);
        collectedItems.splice(index + 1, 0, newItem);
      }
    } else if (action === 'Renew') {
      if (collectedItems.includes(item)) {
        let index = collectedItems.indexOf(item);
        collectedItems.splice(index, 1);
        collectedItems.push(item);
      }
    }
    command = input.shift();
  }
  console.log(collectedItems.join(', '));
}

inventory([
  'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!',
]);
