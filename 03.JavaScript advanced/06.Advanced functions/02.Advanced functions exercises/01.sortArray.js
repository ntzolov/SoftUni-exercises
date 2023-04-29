function sortArray(array, method) {
  const sort = {
    asc(array) {
      return array.sort((a, b) => a - b);
    },
    desc(array) {
      return array.sort((a, b) => b - a);
    },
  };

  return sort[method](array);
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
