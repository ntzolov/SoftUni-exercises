function ticTacToe(arr) {
  let matrix = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let player = 1;

  for (let i = 0; i < arr.length; i++) {
    let line = arr[i].split(' ');
    let row = Number(line[0]);
    let col = Number(line[1]);

    if (player === 1) {
      if (matrix[row][col] !== false) {
        if (matrix[row][col] === 'X' || matrix[row][col] === 'O') {
          console.log('This place is already taken. Please choose another!');
          continue;
        }
      } else {
        matrix[row][col] = 'X';
      }
    } else if (player === 2) {
      if (matrix[row][col] !== false) {
        if (matrix[row][col] === 'X' || matrix[row][col] === 'O') {
          console.log('This place is already taken. Please choose another!');
          continue;
        }
      } else {
        matrix[row][col] = 'O';
      }
    }

    if (
      (matrix[0][0] === 'X' && matrix[0][1] === 'X' && matrix[0][2] === 'X') ||
      (matrix[1][0] === 'X' && matrix[1][1] === 'X' && matrix[1][2] === 'X') ||
      (matrix[2][0] === 'X' && matrix[2][1] === 'X' && matrix[2][2] === 'X') ||
      (matrix[0][0] === 'X' && matrix[1][0] === 'X' && matrix[2][0] === 'X') ||
      (matrix[0][1] === 'X' && matrix[1][1] === 'X' && matrix[2][1] === 'X') ||
      (matrix[0][2] === 'X' && matrix[1][2] === 'X' && matrix[2][2] === 'X') ||
      (matrix[0][0] === 'X' && matrix[1][1] === 'X' && matrix[2][2] === 'X') ||
      (matrix[0][2] === 'X' && matrix[1][1] === 'X' && matrix[2][0] === 'X')
    ) {
      console.log(`Player X wins!`);
      for (let row of matrix) {
        console.log(row.join('\t'));
      }
      return;
    }

    if (
      (matrix[0][0] === 'O' && matrix[0][1] === 'O' && matrix[0][2] === 'O') ||
      (matrix[1][0] === 'O' && matrix[1][1] === 'O' && matrix[1][2] === 'O') ||
      (matrix[2][0] === 'O' && matrix[2][1] === 'O' && matrix[2][2] === 'O') ||
      (matrix[0][0] === 'O' && matrix[1][0] === 'O' && matrix[2][0] === 'O') ||
      (matrix[0][1] === 'O' && matrix[1][1] === 'O' && matrix[2][1] === 'O') ||
      (matrix[0][2] === 'O' && matrix[1][2] === 'O' && matrix[2][2] === 'O') ||
      (matrix[0][0] === 'O' && matrix[1][1] === 'O' && matrix[2][2] === 'O') ||
      (matrix[0][2] === 'O' && matrix[1][1] === 'O' && matrix[2][0] === 'O')
    ) {
      console.log(`Player O wins!`);
      for (let row of matrix) {
        console.log(row.join('\t'));
      }
      return;
    }

    let allMarks = [];

    for (let row of matrix) {
      allMarks.push(...row);
    }

    if (allMarks.every((el) => el != false)) {
      console.log('The game ended! Nobody wins :(');
      for (let row of matrix) {
        console.log(row.join('\t'));
      }
      return;
    }

    if (player === 1) {
      player = 2;
    } else {
      player = 1;
    }
  }
}

ticTacToe([
  '0 1',
  '0 0',
  '0 2',
  '2 0',
  '1 0',
  '1 1',
  '1 2',
  '2 2',
  '2 1',
  '0 0',
]);
