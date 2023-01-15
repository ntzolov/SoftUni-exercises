function factorialDivision(num1, num2) {
  let result = factorial(num1) / factorial(num2)

  console.log(result.toFixed(2));

  function factorial(num) {
    let sumFactorial = 1;
    for (let i = 1; i <= num; i++) {
      sumFactorial *= i;
    }
    return sumFactorial;
  }
}

factorialDivision(6, 2);