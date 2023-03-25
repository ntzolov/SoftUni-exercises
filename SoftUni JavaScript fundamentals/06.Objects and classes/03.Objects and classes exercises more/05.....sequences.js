// I have to sort arrays based on their length and print them....

function sequences(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = input.length - 1; j > i; j--) {
      let array1 = JSON.parse(input[i]);
      let array2 = JSON.parse(input[j]);
      let isSame =
        array1.length === array2.length &&
        array1.every((el) => array2.includes(el));
      if (isSame) {
        input.splice(j, 1);
      }
    }
  }

  let obj = {};
  for (let i = 0; i < input.length; i++) {
    let line = JSON.parse(input[i]);
    obj[i] = line;
  }

  for (let [key, value] of Object.entries(obj)) {
    value.sort((a, b) => b - a);
  }

  console.table(obj);

}

sequences([
  '[-3, -2, -1, 0, 1, 2, 3, 4]',
  '[10, 1, -17, 0, 2, 13]',
  '[4, -3, 3, -2, 2, -1, 1, 0]',
]);
