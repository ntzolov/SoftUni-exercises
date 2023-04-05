function sumOfNumbers(n, m) {
  let start = Number(n);
  let stop = Number(m);
  let sum = 0;

  for (let i = start; i <= stop; i++) {
    sum += i;
  }

  console.log(sum);
}

sumOfNumbers('1', '5');
