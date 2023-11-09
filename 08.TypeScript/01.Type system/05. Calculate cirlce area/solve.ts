const pi = 3.14159;

const calcArea = (radius: number, pi: number): number => {
  const result = Number((Math.pow(radius, 2) * pi).toFixed(2));
  return result
}

console.log(calcArea(5, pi));