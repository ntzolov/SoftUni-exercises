// This seems to be very hard. Waiting for more lectures...

function spiralMatrix(num1, num2) {
  let row = num1;
  let col = num2;
  transpose();
  function transpose(matrix) {
    const grid = [];
    for (let j = 0; j < col; j++) {
      grid[j] = Array(row);
    }
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        grid[j][i] = matrix[i][j];
      }
    }
    console.log(grid);
  }
}

spiralMatrix(5, 5);
