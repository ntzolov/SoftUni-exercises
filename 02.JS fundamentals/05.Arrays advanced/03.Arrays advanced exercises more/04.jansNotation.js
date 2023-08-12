function iansNotation(data) {
  let numbers = [];

  for (let symbol of data) {
    if (!isNaN(symbol)) {
      numbers.push(symbol);
    } else {
      if (numbers.length < 2) {
        return console.log('Error: not enough operands!');
      }

      if (symbol === '+') {
        let numberTwo = numbers.pop();
        let numberOne = numbers.pop();
        let result = numberOne + numberTwo;
        numbers.push(result);
      } else if (symbol === '-') {
        let numberTwo = numbers.pop();
        let numberOne = numbers.pop();
        let result = numberOne - numberTwo;
        numbers.push(result);
      } else if (symbol === '*') {
        let numberTwo = numbers.pop();
        let numberOne = numbers.pop();
        let result = numberOne * numberTwo;
        numbers.push(result);
      } else if (symbol === '/') {
        let numberTwo = numbers.pop();
        let numberOne = numbers.pop();
        let result = numberOne / numberTwo;
        numbers.push(result);
      }
    }
  }
  if (numbers.length === 1) {
    console.log(numbers.join(''));
  } else {
    console.log('Error: too many operands!');
  }
}

iansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);
