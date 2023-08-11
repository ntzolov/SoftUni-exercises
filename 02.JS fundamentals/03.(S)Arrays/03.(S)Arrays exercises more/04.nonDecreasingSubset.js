function nonDecreasingSubset(arr) {
  let max = 0;
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
      newArray.push(arr[i]);
    }
  }
  console.log(newArray.join(' '));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);

// How to make it with array.filter() ???