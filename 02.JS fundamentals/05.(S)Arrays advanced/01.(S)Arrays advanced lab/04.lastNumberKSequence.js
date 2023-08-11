function lastNumberKSequence(num1, num2) {
  let n = num1;
  let k = num2;

  let result = [];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result.push(1);
      continue;
    }
    let currSumAsArr = result.slice(-k);
    for (let j = 0; j < currSumAsArr.length; j++) {
      sum += currSumAsArr[j];
    }
    result.push(sum);
    sum = 0;
  }
  console.log(result.join(' '));
}

lastNumberKSequence(8, 2);
