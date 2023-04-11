function biggerHalf(arr) {
  let startIndex = Math.floor(arr.length / 2);
  let result = arr.sort((a, b) => a - b).slice(startIndex);
  return result
}

biggerHalf([4, 7, 2, 5]);
