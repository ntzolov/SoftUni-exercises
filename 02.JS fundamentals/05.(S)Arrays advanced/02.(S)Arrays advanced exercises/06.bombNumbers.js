function bombNumbers(seqNumbers, bombNumber) {
  while (seqNumbers.includes(bombNumber[0])) {
    let index = seqNumbers.indexOf(bombNumber[0]);
    if (index - bombNumber[1] >= 0) {
      seqNumbers.splice(index - bombNumber[1], bombNumber[1] + bombNumber[1] + 1);
    } else {
      seqNumbers.splice(0, index +  bombNumber[1] + 1);
    }
  }
  let sum = 0;
  for (let el of seqNumbers) {
    sum += el;
  }
  console.log(sum);
}

bombNumbers([0, 1, 1, 1, 1, 1, 1], [0, 2]);