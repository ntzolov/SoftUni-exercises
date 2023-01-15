function printNthElement(arr) {
  let newArr = [];
  let step = Number(arr[arr.length - 1]);
  for (let i = 0; i < arr.length - 1; i += step) {
    newArr.push(arr[i]);
  }
  console.log(newArr.join(' '));
}

printNthElement(['5', '20', '31', '4', '20', '2']);
