function listOfNames(arr) {
  arr.sort((a, b) => a.localeCompare(b));
  let result = [];
  for (let i = 1; i <= arr.length; i++) {
    result.push(`${i}.${arr[i - 1]}`);
  }
  return result.join('\n')
}

console.log(listOfNames(['John', 'Bob', 'Christina', 'Ema']));
