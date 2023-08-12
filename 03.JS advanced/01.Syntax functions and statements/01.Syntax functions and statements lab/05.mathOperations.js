function mathOperations(a, b, operator) {
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '%': (a, b) => a % b,
    '**': (a, b) => a ** b,
  };

  console.log(operators[operator](a, b));
}

mathOperations(5, 6, '+');
