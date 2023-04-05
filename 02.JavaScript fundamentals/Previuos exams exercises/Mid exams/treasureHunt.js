function treasureHunt(input) {
  let loot = input.shift().split('|');

  for (let line of input) {
    if (line === 'Yohoho!') {
      break;
    }

    line = line.split(' ');
    let command = line.shift();

    if (command === 'Loot') {
      for (let item of line) {
        if (!loot.includes(item)) {
          loot.unshift(item);
        }
      }
    } else if (command === 'Drop') {
      let index = Number(line);
      for (let i = 0; i < loot.length; i++) {
        if (index === i) {
          let temp = loot.splice(index, 1).join('');
          loot.push(temp);
        }
      }
    } else if (command === 'Steal') {
      let count = Number(line);
      if (count >= loot.length) {
        let stolenItems = loot.splice(-count);
        console.log(stolenItems.join(', '));
      } else {
        let stolenItems = loot.splice(-count);
        console.log(stolenItems.join(', '));
      }
    }
  }

  let sum = 0;
  for (let item of loot) {
    sum += item.length;
  }

  let averageSum = sum / loot.length;

  if (loot.length > 0) {
    console.log(
      `Average treasure gain: ${averageSum.toFixed(2)} pirate credits.`
    );
  } else {
    console.log(`Failed treasure hunt.`);
  }
}

treasureHunt([
  'Diamonds|Silver|Shotgun|Gold',
  'Loot Silver Medals Coal',
  'Drop -1',
  'Drop 1',
  'Steal 6',
  'Yohoho!',
]);
