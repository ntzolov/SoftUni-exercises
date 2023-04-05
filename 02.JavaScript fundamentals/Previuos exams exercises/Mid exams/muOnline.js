function muOnline(input) {
  let health = 100;
  let bitcoins = 0;
  let commands = input.split('|');
  let roomCounter = 0;

  for (let command of commands) {
    roomCounter++;
    let [move, number] = command.split(' ');
    number = Number(number);

    if (move === 'potion') {
      if (health + number <= 100) {
        health += number;
        console.log(`You healed for ${number} hp.`);
      } else {
        let oldHealth = health;
        health = 100;
        console.log(`You healed for ${health - oldHealth} hp.`);
      }
      console.log(`Current health: ${health} hp.`);
    } else if (move === 'chest') {
      console.log(`You found ${number} bitcoins.`);
      bitcoins += number;
    } else {
      health -= number;
      if (health <= 0) {
        console.log(`You died! Killed by ${move}.`);
        console.log(`Best room: ${roomCounter}`);
        return;
      } else {
        console.log(`You slayed ${move}.`);
      }
    }
  }

  console.log("You've made it!");
  console.log(`Bitcoins: ${bitcoins}`);
  console.log(`Health: ${health}`);
}

muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');
