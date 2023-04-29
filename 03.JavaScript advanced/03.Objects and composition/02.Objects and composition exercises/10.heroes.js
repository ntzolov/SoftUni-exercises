function solve() {
  let race = {
    mage(name) {
      let newMage = {
        name,
        health: 100,
        mana: 100,
        cast(spell) {
          console.log(`${this.name} cast ${spell}`);
          this.mana--;
        },
      };
      return newMage
    },
    fighter(name) {
      let newFighter = {
        name,
        health: 100,
        stamina: 100,
        fight() {
          console.log(`${this.name} slashes at the foe!`);
          this.stamina--;
        },
      };
      return newFighter
    },
  };
  return race
}

let create = solve();
const scorcher = create.mage('Scorcher');
scorcher.cast('fireball');
scorcher.cast('thunder');
scorcher.cast('light');

const scorcher2 = create.fighter('Scorcher 2');
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
