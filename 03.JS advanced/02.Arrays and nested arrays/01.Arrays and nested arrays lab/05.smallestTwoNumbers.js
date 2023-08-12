function smallestTwoNumbers(arr) {
  let result = arr
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(' ');
  console.log(result);
}

smallestTwoNumbers([30, 15, 50, 5]);
