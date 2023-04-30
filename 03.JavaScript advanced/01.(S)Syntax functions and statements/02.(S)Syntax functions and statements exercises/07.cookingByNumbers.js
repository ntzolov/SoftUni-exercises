function cookingByNumbers(number, cmd1, cmd2, cmd3, cmd4, cmd5) {
  let num = Number(number);
  let commands = [cmd1, cmd2, cmd3, cmd4, cmd5];

  for (let command of commands) {
    switch (command) {
      case 'chop':
        num /= 2;
        console.log(num);
        break;
      case 'dice':
        num = Math.sqrt(num);
        console.log(num);
        break;
      case 'spice':
        num += 1;
        console.log(num);
        break;
      case 'bake':
        num *= 3;
        console.log(num);
        break;
      case 'fillet':
        num -= num / 5;
        console.log(num);
        break;
    }
  }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
