function condenseArrayToNumber(arr) {
  while (arr.length > 1) {
    let temp = [];
    for (let i = 0; i < arr.length - 1; i++) {
      temp.push(arr[i] + arr[i + 1]);
    }
    arr = temp;
  }
  console.log(arr[0]);
  // let tempArr = [];
  // let previousNum = 0;
  // let currNum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (i !== 0) {
  //     currNum = arr[i] + previousNum;
  //     tempArr.push(currNum);
  //   } else {
  //     previousNum = arr[i];
  //     continue;
  //   }
  //   previousNum = arr[i];
  //   if (i === arr.length - 1) {
  //     arr = tempArr;
  //     tempArr = [];
  //     i = -1;
  //     continue;
  //   }
  // }
  // arr = tempArr;
  // console.log(previousNum);
}

condenseArrayToNumber([1]);
