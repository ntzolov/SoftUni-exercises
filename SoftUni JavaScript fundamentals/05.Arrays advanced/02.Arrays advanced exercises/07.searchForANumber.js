function searchForANumber(arr1, arr2) {
  let newArr = arr1.splice(0, arr2[0]);
  newArr.splice(0, arr2[1]);
  newArr = newArr.filter((el) => el === arr2[2]);
  console.log(`Number ${arr2[2]} occurs ${newArr.length} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
