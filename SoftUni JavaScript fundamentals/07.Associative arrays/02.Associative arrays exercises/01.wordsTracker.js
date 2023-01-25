function wordsTracker(input) {
  let wordsToFind = input.shift().split(' ');
  let wordsToFindObject = {};
  for (const line of wordsToFind) {
    wordsToFindObject[line] = 0;
  }
  for (const line of input) {
    for (let key in wordsToFindObject) {
      if (key === line) {
        wordsToFindObject[key] += 1;
      }
    }
  }
  let arrayToSort = Object.entries(wordsToFindObject).sort((a,b) => b[1] - a[1])
  let wordsSorted = Object.fromEntries(arrayToSort);
  for (let key in wordsSorted) {
    console.log(`${key} - ${wordsSorted[key]}`);
  }
}

wordsTracker([
  'this sentence',
  'In',
  'this',
  'sentence',
  'you',
  'have',
  'to',
  'count',
  'the',
  'occurrences',
  'of',
  'the',
  'words',
  'this',
  'and',
  'sentence',
  'because',
  'this',
  'is',
  'your',
  'task',
]);
