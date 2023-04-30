function heroicInventory(input) {
  let heroes = [];

  for (let line of input) {
    line = line.split(' / ');
    let name = line.shift();
    let level = Number(line.shift());
    let items = line.shift();
    items = items ? items.split(', ') : [];
    let newHero = createHero(name, level, items);
    heroes.push(newHero);
  }

  function createHero(name, level, items) {
    let hero = {
      name,
      level,
      items,
    };
    return hero;
  }

  let json = JSON.stringify(heroes);
  return json;
}

heroicInventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
