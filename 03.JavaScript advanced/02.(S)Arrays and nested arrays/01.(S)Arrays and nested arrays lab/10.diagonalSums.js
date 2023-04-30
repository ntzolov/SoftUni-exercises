function diagonalSums(matrix) {
  let counter1 = 0;
  let counter2 = matrix.length - 1;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < matrix.length; i++) {
    let currArray = matrix[i];
    sum1 += Number(currArray[counter1]);
    sum2 += Number(currArray[counter2]);
    counter1++;
    counter2--;
  }

  return `${sum1} ${sum2}`
}

diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
