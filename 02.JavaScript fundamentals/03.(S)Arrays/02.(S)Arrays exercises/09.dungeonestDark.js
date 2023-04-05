function dungeonestDark(arr) {
  let health = 100;
  let coins = 0;
  let numberOfRoom = 0;
  let isDied = false;
  let string = arr.toString();
  arr = string.split('|');
  string = arr.toString();
  string = string.replace(/,/g, ' ');
  arr = string.split(' ');
  for (let i = 0; i < arr.length; i += 2) {
    numberOfRoom++;
    if (arr[i] === 'potion') {
      if (Number(arr[i + 1]) + health > 100) {
        console.log(`You healed for ${100 - health} hp.`);
        health = 100;
      } else {
        console.log(`You healed for ${arr[i + 1]} hp.`);
        health += Number(arr[i + 1]);
      }
      console.log(`Current health: ${health} hp.`);
    } else if (arr[i] === 'chest') {
      console.log(`You found ${arr[i + 1]} coins.`);
      coins += Number(arr[i + 1]);
    } else {
      health -= Number(arr[i + 1]);
      if (health > 0) {
        console.log(`You slayed ${arr[i]}.`);
      } else {
        console.log(`You died! Killed by ${arr[i]}.`);
        console.log(`Best room: ${numberOfRoom}`);
        isDied = true;
        break;
      }
    }
  }
  if (!isDied) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);
