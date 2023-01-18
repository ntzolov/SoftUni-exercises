function spiralMatrix(n) {
  let arr = [];
  for (let k = 0; k < n; k++) {
    arr.push([]);
  }

  let row = 0;
  let col = 0;
  let rowEnd = n - 1;
  let colEnd = n - 1;
  let counter = 1;

  while (col <= colEnd && row <= rowEnd) {

    // Top row & middle value (Where col === colEnd && row === rowEnd)
    for (let i = col; i <= colEnd; i++) {
      arr[row][i] = counter;
      counter++;
    }
    row++;

    // End column
    for (let i = row; i <= rowEnd; i++) {
      arr[i][colEnd] = counter;
      counter++;
    }
    colEnd--;

    // End row
    for (let i = colEnd; i >= col; i--) {
      arr[rowEnd][i] = counter;
      counter++;
    }
    rowEnd--;

    // First col from end
    for (let i = rowEnd; i >= row; i--) {
      arr[i][col] = counter;
      counter++;
    }
    col++;
  }

  for (let i = 0; i < arr.length; i++) {
    let currArray = arr[i];
    currArray = currArray.join(' ');
    console.table(currArray);
  }
}

spiralMatrix(5, 5)