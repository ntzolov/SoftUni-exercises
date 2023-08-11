function getFibonator() {
  let counter = 0;
  let a = 0;
  let b = 1;
  function inner() {
    counter++;
    let sum = a + b;
    a = b;
    b = sum;
    if (counter === 1) {
      a = 0;
      b = 1;
    }
    return sum;
  }
  return inner;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
