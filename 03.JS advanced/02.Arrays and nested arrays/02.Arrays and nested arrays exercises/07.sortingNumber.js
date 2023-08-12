function sortingNumber(arr) {
  arr.sort((a, b) => a - b);
  let firstPart = arr.splice(0, Math.ceil(arr.length / 2));
  let secondPart = arr;
  let result = [];
  for (let i = 0; i < firstPart.length; i++) {
    result.push(firstPart[i]);
    if (secondPart.length - 1 >= i) {
      result.push(secondPart[Math.abs(i - secondPart.length + 1)]);
    }
  }
  return result;
}

console.log(sortingNumber([1, 3, 5]));
