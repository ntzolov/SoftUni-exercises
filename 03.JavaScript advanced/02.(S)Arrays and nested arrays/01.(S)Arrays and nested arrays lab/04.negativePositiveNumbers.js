function negativePositiveNumbers(arr) {
  let result = [];
  for (let el of arr) {
    if (Number(el) >= 0) {
      result.push(Number(el));
    } else {
      result.unshift(Number(el));
    }
  }
  for (let el of result) {
    console.log(el);
  }
}

negativePositiveNumbers([7, -2, 8, 9]);
