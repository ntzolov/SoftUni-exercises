function processOddPositions(arr) {
  return arr
    .filter((el, index) => index % 2 === 1)
    .reverse()
    .map((el) => el * 2)
    .join(' ');
}

processOddPositions([10, 15, 20, 25]);
