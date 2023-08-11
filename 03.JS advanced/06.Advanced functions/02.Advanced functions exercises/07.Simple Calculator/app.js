function calculator() {
  let num;
  let num2;
  let result;

  function init(selector1, selector2, resultSelector) {
    num = document.querySelector(selector1);
    num2 = document.querySelector(selector2);
    result = document.querySelector(resultSelector);
  }

  function add() {
    result.value = Number(num.value) + Number(num2.value);
  }

  function subtract() {
    result.value = Number(num.value) - Number(num2.value);
  }



  return {
    init,
    add,
    subtract,
  };
}

  const calculate = calculator();
  calculate.init('#num1', '#num2', '#result');
