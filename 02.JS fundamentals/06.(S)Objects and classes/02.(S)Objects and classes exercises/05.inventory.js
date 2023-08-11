function inventory(inputArray) {
  let register = [];

  class Hero {
    constructor(Hero, level, items) {
      this.Hero = Hero;
      this.level = level;
      this.items = items;
    }
  }

  for (const line of inputArray) {
    let [currName, currLevel, currItems] = line.split(' / ');
    register.push(new Hero(currName, currLevel, currItems));
  }
  register = register.sort((a, b) => a.level - b.level);

  register.forEach(hero => {
    for (let key in hero) {
      if (key === 'Hero') {
        console.log(`${key}: ${hero[key]}`);
      } else {
        console.log(`${key} => ${hero[key]}`);
      }
    }
  })

}

inventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
