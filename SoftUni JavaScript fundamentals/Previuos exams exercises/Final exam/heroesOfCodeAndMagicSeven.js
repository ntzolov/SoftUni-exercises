function heroesOfCodeAndMagicSeven(input) {
  let numberOfHeroes = Number(input.shift());
  let heroes = [];

  class Hero {
    constructor(name, health, mana) {
      this.name = name;
      this.health = Number(health);
      this.mana = Number(mana);
    }

    castSpell(manaNeeded, spellName) {
      if (this.mana >= manaNeeded) {
        this.mana -= manaNeeded;
        console.log(
          `${this.name} has successfully cast ${spellName} and now has ${this.mana} MP!`
        );
      } else {
        console.log(
          `${this.name} does not have enough MP to cast ${spellName}!`
        );
      }
    }

    takeDamage(dmg, attacker) {
      this.health -= dmg;
      if (this.health > 0) {
        console.log(
          `${this.name} was hit for ${dmg} HP by ${attacker} and now has ${this.health} HP left!`
        );
      } else {
        console.log(`${this.name} has been killed by ${attacker}!`);
      }
    }

    recharge(amount) {
      let diff = Math.min(amount, 200 - this.mana);
      this.mana += diff;
      console.log(`${this.name} recharged for ${diff} MP!`);
    }

    heal(amount) {
      let diff = Math.min(amount, 100 - this.health);
      this.health += diff;
      console.log(`${this.name} healed for ${diff} HP!`);
    }
  }

  for (let i = 0; i < numberOfHeroes; i++) {
    let [name, health, mana] = input.shift().split(' ');
    let newHero = new Hero(name, health, mana);
    if (!heroes[name]) {
      heroes[name] = newHero;
    }
  }

  for (let line of input) {
    line = line.split(' - ');
    let command = line.shift();
    if (command === 'CastSpell') {
      let [name, mana, spellName] = line;
      mana = Number(mana);
      heroes[name].castSpell(mana, spellName);
    } else if (command === 'TakeDamage') {
      let [name, dmg, attacker] = line;
      dmg = Number(dmg);
      heroes[name].takeDamage(dmg, attacker);
      if (heroes[name].health <= 0) {
        delete heroes[name];
      }
    } else if (command === 'Recharge') {
      let [name, amount] = line;
      amount = Number(amount);
      heroes[name].recharge(amount);
    } else if (command === 'Heal') {
      let [name, amount] = line;
      amount = Number(amount);
      heroes[name].heal(amount);
    }
  }

  for (let hero in heroes) {
    console.log(
      `${hero}\n  HP: ${heroes[hero].health}\n  MP: ${heroes[hero].mana}`
    );
  }
}

heroesOfCodeAndMagicSeven([
  '4',
  'Adela 90 150',
  'SirMullich 70 40',
  'Ivor 1 111',
  'Tyris 94 61',
  'Heal - SirMullich - 50',
  'Recharge - Adela - 100',
  'CastSpell - Tyris - 1000 - Fireball',
  'TakeDamage - Tyris - 99 - Fireball',
  'TakeDamage - Ivor - 3 - Mosquito',
  'End',
]);
