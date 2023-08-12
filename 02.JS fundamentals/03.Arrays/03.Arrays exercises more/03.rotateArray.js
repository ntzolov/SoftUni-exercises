function rotateArray(arr) {
  let rotations = Number(arr[arr.length - 1]);
  arr.pop();

  for (let i = 0; i < rotations; i++) {
    let temp = [];
    temp.push(arr[arr.length - 1]);
    arr = arr.slice(0, -1);
    arr.unshift(temp[0]);
  }
  console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
