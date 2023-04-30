function sameNumbers(number) {
  let asArray = number.toString().split('');
  let symbol = asArray[0];
  let isSame = asArray.every((el) => el === symbol);
  let sum = asArray.map(Number).reduce((acc, el) => acc + el, 0);
  if (!isSame) {
    console.log('false');
    console.log(sum);
  } else {
    console.log('true');
    console.log(sum);
  }
}

sameNumbers(1234);
