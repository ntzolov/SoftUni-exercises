function addAndSubtract(num1, num2, num3) {
  let added = sum(num1, num2);
  let result = subtract(added, num3);
  console.log(result);

  function sum(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }
}

addAndSubtract(23, 6, 10);
