// This seems to be very hard. Waiting for more lectures...

function spiralMatrix(row, col) {
  let n = row * col;
  let arr = Array.from({ length: n }, () => []);
  let roww = 0;
  let coll = 0;
  let rowEnd = n - 1;
  let colEnd = n - 1;
  let counter = 1;

  while (coll <= colEnd && roww <= rowEnd) {
    // Top row & middle value (Where col === colEnd && row === rowEnd)
    for (let i = coll; i <= colEnd; i++) {
      arr[roww][i] = counter;
      counter++;
    }
    roww++;

    // end column
    for (let i = roww; i <= rowEnd; i++) {
      arr[i][colEnd] = counter;
      counter++;
    }
    colEnd--;

    // end row
    for (let i = colEnd; i >= coll; i--) {
      arr[rowEnd][i] = counter;
      counter++;
    }
    rowEnd--;

    // First col from end
    for (let i = rowEnd; i >= roww; i--) {
      arr[i][coll] = counter;
      counter++;
    }
    coll++;
  }
  console.log(arr);
}

spiralMatrix(5, 5);
