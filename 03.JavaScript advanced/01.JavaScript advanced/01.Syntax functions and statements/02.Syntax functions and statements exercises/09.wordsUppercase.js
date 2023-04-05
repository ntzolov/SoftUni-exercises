function wordsUppercase(string) {
  let pattern = /(?<word>[A-Za-z0-9]+)/g
  let result = []
  let matches = pattern.exec(string)

  while(matches) {
    let word = matches.groups.word;
    result.push(word.toUpperCase())
    matches = pattern.exec(string)
  }

  console.log(result.join(', '));
}

wordsUppercase('Hi, how are you?')