function sumEvenNumbers(arr) {
  let sum = 0;
  for (let el of arr) {
    if (Number(el) % 2 === 0) {
      sum += Number(el);
    }
  }
  console.log(sum);
}

sumEvenNumbers(['2', '4', '6', '8', '10']);
