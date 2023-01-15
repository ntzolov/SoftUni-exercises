function maxNumber(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i !== arr.length - 1) {
      if (arr[i] > max) {
        max = arr[i];
        newArr.push(arr[i]);
      }
    } else {
      max = arr[i];
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.reverse().join(' '));
}

maxNumber([14, 24, 3, 19, 15, 17]);
