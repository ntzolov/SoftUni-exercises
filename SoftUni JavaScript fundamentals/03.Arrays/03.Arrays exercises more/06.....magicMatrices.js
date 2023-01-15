// One '*' in Judge. 

function magicMatrices(arr) {
  let isEqual = true;
  let tempNumOne = 0;
  let tempNumTwo = 0;

  for (let i = 0; i < arr.length; i++) {
    tempNumOne = 0;
    for (let j = 0; j < arr[i].length; j++) {
      tempNumOne += arr[i][j];
      if (i === 0) {
        tempNumTwo += arr[i][j];
      }
    }
    if (tempNumOne !== tempNumTwo) {
      isEqual = false;
      break;
    }
  }
  tempNumOne = 0;
  tempNumTwo = 0;

  for (let j = 0; j < arr.length; j++) {
    tempNumOne = 0;
    for (let k = 0; k < arr[j].length; k++) {
      tempNumOne += arr[k][j];
      if (j === 0) {
        tempNumTwo += arr[k][j];
      }
    }
    if (tempNumOne !== tempNumTwo) {
      isEqual = false;
      break;
    }
  }

  if (!isEqual) {
    console.log('false');
  } else {
    console.log('true');
  }
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
