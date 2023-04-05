function wordOccurrences(input) {
  let words = {};

  for (const line of input) {
    if (!words[line]) {
      words[line] = 1;
    } else {
      words[line] = words[line] += 1;
    }
  }

  let arrayFromObj = Object.entries(words).sort((a, b) => b[1] - a[1]);
  let wordsSorted = Object.fromEntries(arrayFromObj);

  for (let key in wordsSorted) {
    console.log(`${key} -> ${wordsSorted[key]} times`);
  }
}

wordOccurrences([
  'Here',
  'is',
  'the',
  'first',
  'sentence',
  'Here',
  'is',
  'another',
  'sentence',
  'And',
  'finally',
  'the',
  'third',
  'sentence',
]);
