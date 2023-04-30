function bunnyKill(inputArray) {
  let bombCells = inputArray
    .pop()
    .split(' ')
    .map((str) => str.split(',').map((x) => Number(x)));
  let matrix = inputArray.map((row) => row.split(' ').map((x) => Number(x)));

  let bunniesKilled = 0;
  let damage = 0;

  for (let i = 0; i < bombCells.length; i++) {
    let bombRow = bombCells[i][0];
    let bombCol = bombCells[i][1];
    let bombValue = matrix[bombRow][bombCol];

    if (bombValue <= 0) {
      continue;
    }

    let startRow = Math.max(0, bombRow - 1);
    let endRow = Math.min(bombRow + 1, matrix.length - 1);

    for (let row = startRow; row <= endRow; row++) {
      let startCol = Math.max(0, bombCol - 1);
      let endCol = Math.min(bombCol + 1, matrix[row].length - 1);

      for (let col = startCol; col <= endCol; col++) {
        matrix[row][col] -= bombValue;
      }
    }

    bunniesKilled++;
    damage += bombValue;
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > 0) {
        damage += matrix[row][col];
        bunniesKilled++;
      }
    }
  }

  console.log(damage);
  console.log(bunniesKilled);
}

bunnyKill([
  '5 10 15 20',
  '10 10 10 10',
  '10 15 10 10',
  '10 10 10 10',
  '2,2 0,1',
]);
