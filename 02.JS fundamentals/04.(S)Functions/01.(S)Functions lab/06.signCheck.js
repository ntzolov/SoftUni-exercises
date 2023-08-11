function signCheck(num1, num2, num3) {
  let result = num1 * num2 * num3;

  if (result >= 0) {
    console.log('Positive');
  } else {
    console.log('Negative');
  }
}

signCheck(-6, -12, 14);
