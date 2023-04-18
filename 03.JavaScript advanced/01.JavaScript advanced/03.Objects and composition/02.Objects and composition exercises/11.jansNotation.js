function jansNotation(arr) {
  let result = [];
  let delimiter = {
    '+': (a, b) => {
      return a + b;
    },
    '-': (a, b) => {
      return a - b;
    },
    '*': (a, b) => {
      return a * b;
    },
    '/': (a, b) => {
      return a / b;
    },
  };

  for (let token of arr) {
    if (!isNaN(token)) {
      result.push(token);
    } else {
      if (result.length < 2) {
        return console.log(`Error: not enough operands!`);
      }
      let num2 = result.pop();
      let num1 = result.pop();
      result.push(delimiter[token](num1, num2));
    }
  }

  if (result.length > 1) {
    return console.log(`Error: too many operands!`);
  }
  console.log(result.join(''));
}

jansNotation([7, 33, 8, '-', '+', '-', '+']);
