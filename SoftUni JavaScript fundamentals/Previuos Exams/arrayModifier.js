function arrayModifier(arr) {
  let myArr = arr[0].split(' ');
  for (let i = 1; i < arr.length; i++) {
    let currCommand = arr[i].split(' ');

    if (currCommand[0] === 'swap') {
      let temp1 = myArr[currCommand[1]];
      let temp2 = myArr[currCommand[2]];
      myArr[currCommand[1]] = temp2;
      myArr[currCommand[2]] = temp1;
    } else if (currCommand[0] === 'multiply') {
      let result = myArr[currCommand[1]] * myArr[currCommand[2]];
      myArr[currCommand[1]] = result;
    } else if (currCommand[0] === 'decrease') {
      for (let j = 0; j < myArr.length; j++) {
        myArr[j] = Number(myArr[j]) - 1;
      }
    }
  }
  console.log(myArr.join(', '));
}

arrayModifier([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end',
]);
