function sumFirstAndLast(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || i === arr.length - 1) {
      result += Number(arr[i]);
    }
  }
  console.log(result);
}

sumFirstAndLast(['20', '30', '40']);
