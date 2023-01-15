function numberModification(number) {
  let tempResult = 0;
  let strOfNumber = String(number);

  while (sumOfAllDigits(Number(strOfNumber)) / strOfNumber.length < 5) {
    strOfNumber += 9
  }

  console.log(strOfNumber);

  function sumOfAllDigits(num) {
    let sum = 0;
    strOfNumber = String(num);
    for (const el of strOfNumber) {
      sum += Number(el);
    }
    return sum;
  }
}

numberModification(101);

