const inputData = [5, "+", 10]

type calType = {
  [key: string]: string
}

function solve(num1: number, delimiter: string, num2: number) {
  const calculatorMap: calType = {
    '+': (num1 + num2).toFixed(2),
    '-': (num1 - num2).toFixed(2),
    '/': (num1 / num2).toFixed(2),
    '*': (num1 * num2).toFixed(2),
  }

  return calculatorMap[delimiter]
}

console.log(solve(
  7,
  "*",
  5
));
