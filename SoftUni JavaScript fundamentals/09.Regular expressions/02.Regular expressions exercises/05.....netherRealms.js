// 20/100 and cant break the code ????

function netherRealms(input) {
  let demons = {};
  let result = [];
  let lines = input.split(/,\s+/);
  let health = 0;
  let damage = 0;
  let patternHealth = /[^\d\+\-*\/\.]/;
  let patternName = /^[^\s,]+$/;
  let patternAddAndSubtract = /(?<number>-?\d+(\.\d+)?)/g;

  for (const line of lines) {
    if (patternName.test(line)) {
      demons[line] = {};

      let nameArray = line.split('');
      for (let symbol of nameArray) {
        if (patternHealth.test(symbol)) {
          health += symbol.charCodeAt();
        }
      }
      demons[line]['health'] = health;

      let add = patternAddAndSubtract.exec(line);
      if (add) {
        while (add !== null) {
          damage += +add.groups.number;
          add = patternAddAndSubtract.exec(line);
        }
      }

      for (let letter of line) {
        if (letter === '/') {
          damage /= 2;
        } else if (letter === '*') {
          damage *= 2;
        }
      }
      demons[line]['damage'] = damage;

      health = 0;
      damage = 0;
    }
  }

  Object.entries(demons)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((name) => {
      result.push(name[0]);
      Object.entries(name[1]).forEach((el) => result.push(el[1]));
    });

  for (let i = 0; i < result.length; i += 3) {
    console.log(
      `${result[i]} - ${result[i + 1]} health, ${result[i + 2].toFixed(
        2
      )} damage`
    );
  }
}


netherRealms('q, s, 5a');
