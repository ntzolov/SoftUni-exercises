function processOddNumbers(arr) {
  let arrOnOddPositions = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      arrOnOddPositions.push(arr[i] * 2);
    }
  }
  arrOnOddPositions.reverse();
  console.log(arrOnOddPositions.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
