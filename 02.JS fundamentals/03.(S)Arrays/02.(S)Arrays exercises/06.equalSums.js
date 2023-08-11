function equalSums(arr) {
  let isEqual = false;
  for (let i = 0; i < arr.length; i++) {
    let left = 0;
    let right = 0;
    for (let j = 0; j < arr.length; j++) {
      if (j < i) {
        left += arr[j];
      } else if (j > i) {
        right += arr[j];
      } else {
        continue;
      }
    }
    if (left === right) {
      console.log(i);
      isEqual = true;
    }
  }
  if (!isEqual) {
    console.log('no');
  }
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
