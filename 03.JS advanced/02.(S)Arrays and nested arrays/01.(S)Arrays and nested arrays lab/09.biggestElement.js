function biggestElement(arr) {
  let result = [];
  for (let el of arr) {
    result.push(...el);
  }
  let biggest = result.sort((a, b) => a - b).pop();
  return biggest
}

biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);
