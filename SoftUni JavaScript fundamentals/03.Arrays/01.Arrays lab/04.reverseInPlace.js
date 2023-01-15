function reverseInPlace(arr) {
  // console.log(arr.reverse().join(' '));
  for (let i = 0; i < arr.length / 2; i++) {
    let k = arr.length - 1 - i;
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
  }
  console.log(arr.join(' '));
}

reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
