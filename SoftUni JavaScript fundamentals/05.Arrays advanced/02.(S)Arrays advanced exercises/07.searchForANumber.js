function searchForANumber(arr1, arr2) {

  let newArr = arr1.slice(0, arr2[0]);
  console.log(newArr);

  newArr.splice(0, arr2[1]);
  console.log(newArr);

  newArr = newArr.filter((el) => el === arr2[2]);
  console.log(newArr);
  
  console.log(`Number ${arr2[2]} occurs ${newArr.length} times.`);
}

searchForANumber([5, 2, 3, 3, 4, 1, 6, 3], [5, 2, 3]);
