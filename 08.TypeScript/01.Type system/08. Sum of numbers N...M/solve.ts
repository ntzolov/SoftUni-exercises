const calcSum = (num1: number, num2: number): number => {
  let result = 0
  for (let i = num1; i <= num2; i++) {
    result += i
  }
  return result
}

console.log(calcSum(1, 5));