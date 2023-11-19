const solve = (num1: number, num2: number, num3: number): string => {
  const result: number = Math.max(num1, num2, num3)
  return `The largest number is ${result}.`
}

console.log(solve(-3, -5, -22.5));