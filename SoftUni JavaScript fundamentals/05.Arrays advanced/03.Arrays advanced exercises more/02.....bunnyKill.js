function bunnyKill(inputArray) {

  let bombCoordinates = inputArray.pop().split(' ');
  let field = [];
  let bunniesKilled = 0;
  let damage = 0;

  for (let i = 0; i < inputArray.length; i++) {
    field.push(inputArray[i].split(' '));
  }

  for (let i = 0; i < bombCoordinates.length; i++) {
    let currBombCoordinates = bombCoordinates[i];
    currBombCoordinates = currBombCoordinates.split(',');
    let bombRow = +currBombCoordinates[0]
    let bombCol = +currBombCoordinates[1]
    let bombPower = +field[bombRow][bombCol];


    for (let row = 0; row < field.length; row++) {
      for (let col = 0; col < field.length; col++) {
        if (
          Math.abs(row - +currBombCoordinates[0]) < 2 &&
          Math.abs(col - +currBombCoordinates[1]) < 2
        ) {
          if (
            row === +currBombCoordinates[0] &&
            col === +currBombCoordinates[1]
          ) {
            field[row][col] -= bombPower;
            damage += bombPower
            if (bombPower > 0) {
              bunniesKilled++
            }
          } else if (+field[row][col] <= bombPower) {
            field[row][col] = 0;
          } else {
            field[row][col] -= bombPower;
          }
        }
      }
    }
  }

  for (let j = 0; j < field.length; j++) {
    for (let k = 0; k < field[j].length; k++) {
      if (+field[j][k] > 0) {
        damage += +field[j][k];
        bunniesKilled++;
      }
    }
  }
  console.log(damage);
  console.log(bunniesKilled);
}

bunnyKill([

  '10 20 10',
  '10 10 10',
  '10 10 10',

  '0,0 0,1',
]);
