function gladiatorInventory(array) {
  let inventory = array.shift();
  inventory = inventory.split(' ');

  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(' ');

    if (command[0] === 'Buy') {
      if (!inventory.includes(command[1])) {
        inventory.push(command[1]);
      }
    } else if (command[0] === 'Trash') {
      if (inventory.includes(command[1])) {
        let index = inventory.indexOf(command[1]);
        inventory.splice(index, 1);
      }
    } else if (command[0] === 'Repair') {
      if (inventory.includes(command[1])) {
        let index = inventory.indexOf(command[1]);
        let temp = inventory.splice(index, 1).toString();
        inventory.push(temp);
      }
    } else if (command[0] === 'Upgrade') {
      let itemPlusUpgrade = String(command[1]);
      let itemPlusUpgradeArray = itemPlusUpgrade.split('-');
      let item = itemPlusUpgradeArray[0];
      let upgrade = itemPlusUpgradeArray[1];
      
      if (inventory.includes(item)) {
        let index = inventory.indexOf(item);
        if (index === inventory.length - 1) {
          inventory.push(`${item}:${upgrade}`)
        } else {
          inventory.splice(index + 1, 0, `${item}:${upgrade}`)
        }
      }
    }
  }
  console.log(inventory.join(' '));
}

gladiatorInventory([
  'SWORD Shield Spear',
  'Buy Bag',
  'Trash Shield',
  'Repair Spear',
  'Upgrade Spear-Amazon',
]);
