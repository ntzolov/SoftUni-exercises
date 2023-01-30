function reverseAnArrayOfNumbers(n, myArr) {
  let result = '';
  for (let i = n - 1; i >= 0; i--) {
    result += `${myArr[i]} `;
  }
  console.log(result);

  // let newArr = [];
  // for (let i = 0; i < n; i++) {
  //   newArr.push(myArr[i]);
  // }
  // newArr = newArr.reverse().join(' ');
  // console.log(newArr);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);

