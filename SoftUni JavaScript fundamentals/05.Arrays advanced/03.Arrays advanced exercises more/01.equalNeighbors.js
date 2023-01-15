function equalNeighbors(array) {
  let pairs = 0;
  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {

      if (array[i][j] === array[i][j - 1]) {
        pairs += 1;
      }

      if (i === 0) {
        continue;
      }

      if (array[i][j] === array[i - 1][j]) {
        pairs += 1;
      }
    }
  }
  console.log(pairs);
}

equalNeighbors([
  ['2', '3', '4', '7', '0'],
  ['4', '0', '5', '3', '4'],
  ['2', '3', '5', '4', '2'],
  ['9', '8', '7', '5', '4'],
]);
