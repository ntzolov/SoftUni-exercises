function maxSequenceOfEqualElements(arr) {
  let num = 0;
  let final = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    temp = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === num) {
        temp.push(arr[j]);
        if (temp.length > final.length) {
          final = temp;
        }
      } else {
        temp = [];
      }
    }
  }
  console.log(final.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
