function diagonalAtack(arr) {
  // Variables for every diagonal sum
  let sum1 = 0;
  let sum2 = 0;
  arr = arr.map((el) => el.split(' '));

  // Counters for indexing the diagonals in loop
  let counter1 = 0;
  let counter2 = arr.length - 1;

  let magicNumber;

  // Find the diagonals sums
  for (let i = 0; i < arr.length; i++) {
    let currArray = arr[i];
    sum1 += Number(currArray[counter1]);
    sum2 += Number(currArray[counter2]);
    counter1++;
    counter2--;
  }

  // Check if the sums are equal
  if (sum1 === sum2) {
    magicNumber = sum1;
    counter1 = 0;
    counter2 = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        let currArray = arr[i];
        if (counter1 === j || counter2 === j) {
          continue;
        } else {
          arr[i][j] = magicNumber;
        }
      }
      counter1++;
      counter2--;
    }
  }

  // Fill magicNumber to places except the diagonals

  // console.log every row in a new row
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join(' '));
  }
}

diagonalAtack(['1 1 1', '1 1 1', '1 1 0']);
