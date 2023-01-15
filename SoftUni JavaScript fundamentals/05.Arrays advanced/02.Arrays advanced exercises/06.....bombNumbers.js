function bombNumbers(seqNumbers, bombNumber) {
  for (let currNum of seqNumbers) {
    if (currNum === bombNumber[0]) {
      let indexOfCurrNum = seqNumbers.indexOf(currNum);

      if (indexOfCurrNum - bombNumber[1] < 0) {
        seqNumbers.splice(0, indexOfCurrNum + bombNumber[1] + 1);
      } else {
        seqNumbers.splice(indexOfCurrNum - bombNumber[1], bombNumber[1] * 2 + 1);
      }
    }
  }
  let sum = 0;
  for (let el of seqNumbers) {
    sum += el;
  }
  console.log(sum);
}

bombNumbers([1, 1, 0, 1, 1, 1, 1, 1, 1], [0, 2]);
