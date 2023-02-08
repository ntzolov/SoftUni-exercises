function airPollution(tempMap, forces) {
  let map = [];
  let pollutedAreas = [];

  for (let line of tempMap) {
    line = line.split(' ');
    line = line.map(Number);
    map.push(line);
  }

  for (let line of forces) {
    let [force, index] = line.split(' ');
    index = Number(index);
    if (force === 'breeze') {
      breeze(map, index)
    } else if (force === 'gale') {
      gale(map, index)
    } else if (force === 'smog') {
      smog(map, index)
    }
  }

  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map.length; col++) {
      if (map[row][col] >= 50) {
        pollutedAreas.push(`[${row}-${col}]`);
      }
    }
  }

  if (pollutedAreas.length > 0) {
    console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
  } else {
    console.log('No polluted areas');
  }

  function breeze(array, index) {
    for (let row = 0; row < array.length; row++) {
      for (let col = 0; col < array.length; col++) {
        if (row === index) {
          map[row][col] -= 15;
          if (map[row][col] < 0) {
            map[row][col] = 0;
          }
        }
      }
    }
  }

  function gale(array, index) {
    for (let row = 0; row < array.length; row++) {
      for (let col = 0; col < array.length; col++) {
        if (col === index) {
          map[row][col] -= 20;
          if (map[row][col] < 0) {
            map[row][col] = 0;
          }
        }
      }
    }
  }

  function smog(array, index) {
    for (let row = 0; row < array.length; row++) {
      for (let col = 0; col < array.length; col++) {
        map[row][col] += index;
      }
    }
  }
}

airPollution(
  [
    '5 7 3 28 32',
'41 12 49 30 33',
'3 16 20 42 12',
'2 20 10 39 14',
'7 34 4 27 24',
  ],
  ['smog 11', 'gale 3', 'breeze 1', 'smog 2']
);
