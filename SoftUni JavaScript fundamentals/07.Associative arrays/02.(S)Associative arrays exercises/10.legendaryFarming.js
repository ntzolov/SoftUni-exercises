function legendaryFarming(line) {
  let junkMaterials = {};
  let legendaryMaterials = {
    Shadowmourne: {
      shards: 0,
    },
    Valanyr: {
      fragments: 0,
    },
    Dragonwrath: {
      motes: 0,
    },
  };

  let commands = line.split(' ');
  let isFound = false;
  for (let i = 0; i < commands.length; i += 2) {
    let quantity = +commands[i];
    let material = commands[i + 1].toLowerCase();

    if (
      material === 'motes' ||
      material === 'shards' ||
      material === 'fragments'
    ) {
      for (let item in legendaryMaterials) {
        if (
          legendaryMaterials[item][material] === 0 ||
          legendaryMaterials[item][material]
        ) {
          legendaryMaterials[item][material] += quantity;
          if (legendaryMaterials[item][material] >= 250) {
            console.log(`${item} obtained!`);
            legendaryMaterials[item][material] -= 250;
            isFound = true;
            break;
          }
        }
      }
      if (isFound) {
        break;
      }
    } else if (!junkMaterials[material]) {
      junkMaterials[material] = quantity;
    } else if (junkMaterials[material]) {
      junkMaterials[material] += quantity;
    }
  }

  let legendaryMaterialsArray = [];
  Object.entries(legendaryMaterials).forEach((el) => {
    Object.entries(el[1]).forEach((el) => {
      legendaryMaterialsArray.push(el);
    });
  });
  
  legendaryMaterialsArray
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .forEach((el) => {
      console.log(`${el[0]}: ${el[1]}`);
    });

  Object.entries(junkMaterials)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((el) => {
      console.log(`${el[0]}: ${el[1]}`);
    });
}

legendaryFarming(
  '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
);
