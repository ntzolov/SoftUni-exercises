function netherRealms(input) {
  let demons = [];
  let lines = input.split(/,\s+/);
  console.log(lines);
  let health = 0;
  let damage = 0;
  let patternHealth = /[^\d\+\-*\/\.]/;
  let patternName = /^[^ ,]+$/;
  let patternAddAndSubtract = /(?<number>\-?\d+(.\d+)?)/g;
  let patternSubtract = /\-(?<number>\d+(.\d+)?)/g;

  for (const line of lines) {
    if (patternName.test(line)) {
      let nameArray = line.split('');
      for (let symbol of nameArray) {
        if (patternHealth.test(symbol)) {
          health += symbol.charCodeAt();
        }
      }

      let add = patternAddAndSubtract.exec(line);
      if (add) {
        while (add !== null) {
          damage += +add.groups.number;
          add = patternAddAndSubtract.exec(line);
        }
      }

      // let subtract = patternSubtract.exec(line);
      // if (subtract) {
      //   while (subtract !== null) {
      //     damage -= +subtract.groups.number;
      //     subtract = patternSubtract.exec(line);
      //   }
      // }

      for (let letter of line) {
        if (letter === '/') {
          damage /= 2;
        } else if (letter === '*') {
          damage *= 2;
        }
      }
      console.log(damage);

      demons.push(line, health, damage);
      health = 0;
      damage = 0;
    }
  }
  

}
netherRealms('M3ph1st0**, Aza zel,   M3ph-0.5s-0.5t0.0**,  Gos/ho');
