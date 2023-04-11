function rotateArray(arr, num) {
  for (let i = 0; i < num; i++) {
    let temp = arr.pop();
    arr.unshift(temp);
  }
  return arr.join(' ')
}

console.log(rotateArray(['1', '2', '3', '4'], 2));
