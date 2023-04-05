function plantDiscovery(input) {
  let flowers = {};
  let linesRarity = Number(input.shift());

  for (let i = 0; i < linesRarity; i++) {
    let [flower, rareIndex] = input.shift().split('<->');
    rareIndex = Number(rareIndex);
    flowers[flower] = { rarity: rareIndex, rating: [] };
  }

  for (let line of input) {
    let [command, newline] = line.split(': ');
    if (command === 'Exhibition') {
      break;
    } else if (command === 'Rate') {
      let [flower, index] = newline.split(' - ');
      index = Number(index);
      if (flowers[flower]) {
        flowers[flower].rating.push(index);
      } else {
        console.log('error');
      }
    } else if (command === 'Update') {
      let [flower, index] = newline.split(' - ');
      index = Number(index);
      if (flowers[flower]) {
        flowers[flower].rarity = index;
      } else {
        console.log('error');
      }
    } else if (command === 'Reset') {
      let flower = newline;
      if (flowers[flower]) {
        flowers[flower].rating = [];
      } else {
        console.log('error');
      }
    }
  }

  console.log('Plants for the exhibition:');
  for (let flower in flowers) {
    console.log(
      `- ${flower}; Rarity: ${flowers[flower].rarity}; Rating: ${average(
        flowers[flower].rating
      ).toFixed(2)}`
    );
  }

  function average(arr) {
    if (!arr.length) {
      return 0;
    } else {
      let average = 0;
      for (let el of arr) {
        average += Number(el);
      }
      average = average / arr.length;
      return average;
    }
  }
}

plantDiscovery([
  '3',
  'MAK<->4',
  'LILIA<->7',
  'KOKICHE<->2',
  'Rate: MAK - 10',
  'Rate: MAK - 10',
  'Rate: MAK - 10',
  'Rate: MAK - 40',
  'Update: MAK - 15',
  'Reset: MAK',
  'Exhibition',
]);
