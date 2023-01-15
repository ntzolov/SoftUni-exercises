function nXnMatrix(num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result += num + ' ';
    }
    console.log(result);
    result = '';
  }
}

nXnMatrix(6);
