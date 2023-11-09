const logTheLargestNumber = (num1: number, num2: number, num3: number): string => {
  let biggest = num1
  if (num2 > biggest) { biggest = num2 }
  if (num3 > biggest) { biggest = num3 }
  const result = `The largest number is ${biggest}.`
  return result
}

console.log(logTheLargestNumber(-3, -5, -22.5));