function repeatString(str, num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(str);
  }
  console.log(arr.join(''));
}

repeatString('abc', 3);
