function oddAndEvenSum(numbers) {
  let str = String(numbers);
  let arr = str.split('');
  let sumOdd = 0;
  let sumEven = 0;

  for (let el of arr) {
    if (el % 2 === 0) {
      sumEven += Number(el);
    } else {
      sumOdd += Number(el);
    }
  }

  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddAndEvenSum(3495892137259234);
