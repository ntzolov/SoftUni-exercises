function oddOccurrences(input) {
  input = input.toLowerCase().split(' ');
  let words = {};

  for (let el of input) {
    !words[el] ? (words[el] = 1) : (words[el] = words[el] += 1);
  }
  let result = [];

  let arrayToSort = Object.entries(words).sort((a, b) => b[1] - a[1]);
  for (const element of arrayToSort) {
    if (element[1] % 2 === 1) {
      result.push(element[0]);
    }
  }
  console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
 