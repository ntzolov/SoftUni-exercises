function sequences(input) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    obj[i] = JSON.parse(input[i]);
  }

  for (let el of Object.values(obj)) {
    el.sort((a, b) => b - a);
  }

  console.debug(obj);
}

sequences([
  '[-3, -2, -1, 0, 1, 2, 3, 4]',
  '[10, 1, -17, 0, 2, 13]',
  '[4, -3, 3, -2, 2, -1, 1, 0]',
]);
