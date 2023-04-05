function magicSum(arr, num) {
  for (let i = 0; i < arr.length - 1; i++) {
    let firstNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (firstNum + arr[j] === num) {
        console.log(`${firstNum} ${arr[j]}`);
      }
    }
  }
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27);
