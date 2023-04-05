function aggregateElements(input) {
  let sum1 = 0;
  let sum2 = 0;
  let concat = '';
  
  for (let number of input) {
    sum1 += number;
    sum2 += 1 / number;
    concat += number;
  }

  console.log(`${sum1}\n${sum2}\n${concat}`);
}

aggregateElements([2, 4, 8, 16]);
