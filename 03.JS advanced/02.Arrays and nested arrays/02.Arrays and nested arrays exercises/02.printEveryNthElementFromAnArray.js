function printEveryNthElementFromAnArray(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr[i]);
  }
  return result;
}

printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2);
