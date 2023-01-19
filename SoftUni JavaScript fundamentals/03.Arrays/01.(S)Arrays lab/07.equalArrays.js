function equalArrays(arr1, arr2) {
  isIdentical = true;
  let sum = 0;
  let index = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += Number(arr1[i]);
    if (arr1[i] !== arr2[i]) {
      isIdentical = false;
      index = i;
      break;
    }
  }
  if (isIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(`Arrays are not identical. Found difference at ${index} index`);
  }
}

equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
