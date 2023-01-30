function addAndSubtract(arr) {
  let sumOriginal = 0;
  let sumModified = 0;
  let modifiedArr = [];
  for (let i = 0; i < arr.length; i++) {
    sumOriginal += arr[i];
    if (arr[i] % 2 === 0) {
      modifiedArr.push(arr[i] + i);
      sumModified += arr[i] + i;
    } else {
      modifiedArr.push(arr[i] - i);
      sumModified += arr[i] - i;
    }
  }
  console.log(modifiedArr);
  console.log(`${sumOriginal}\n${sumModified}`);
  
}

addAndSubtract([5, 15, 23, 56, 35])