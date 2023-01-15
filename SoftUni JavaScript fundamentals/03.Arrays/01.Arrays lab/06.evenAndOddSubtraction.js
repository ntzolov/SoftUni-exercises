function evenAndOddSubtraction(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let el of arr) {
    if (Number(el) % 2 === 0) {
      evenSum += Number(el);
    } else {
      oddSum += Number(el);
    }
  }
  let total = evenSum - oddSum;
  console.log(total);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
