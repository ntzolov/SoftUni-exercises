function lastKNumbersSequence(lengthSequence, prevNumbers) {
  let result = [];
  for (let i = 0; i < lengthSequence; i++) {
    let currNumber = 0;
    if (i === 0) {
      result.push(1);
    } else {
      currNumber =
        i - prevNumbers > 0
          ? result.slice(i - prevNumbers).reduce((acc, num) => acc + num, 0)
          : result.slice(0).reduce((acc, num) => acc + num, 0);
      result.push(currNumber);
    }
  }
  return result;
}

lastKNumbersSequence(6, 3);
