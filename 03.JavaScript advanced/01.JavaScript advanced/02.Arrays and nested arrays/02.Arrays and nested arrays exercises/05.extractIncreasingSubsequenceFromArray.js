function extractIncreasingSubsequenceFromArray(arr) {
  let biggest = arr.shift();
  let result = [];
  result.push(biggest);
  for (let num of arr) {
    if (num >= biggest) {
      biggest = num;
      result.push(num);
    }
  }
  return result;
}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
