function arrayRotation(arr, num) {
  let temp = '';
  for (let i = 0; i < num; i++) {
    temp = arr.shift();
    arr.push(temp);
  }
  console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);
