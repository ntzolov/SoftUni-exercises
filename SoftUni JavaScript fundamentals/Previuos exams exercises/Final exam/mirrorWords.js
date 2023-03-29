function mirrorWords(input) {
  let text = input.shift();
  let pattern = /([@#])(?<word1>[a-zA-Z]{3,})\1\1(?<word2>[a-zA-Z]{3,})\1/g;
  let counter = 0;
  let mirrorWords = [];
  let matches = pattern.exec(text);

  while (matches) {
    counter++;
    let word1 = matches.groups.word1;
    let word2 = matches.groups.word2;
    let word2reversed = word2.split('').reverse().join('');
    if (word1 === word2reversed) {
      let result = '';
      result += word1 + ' <=> ' + word2;
      mirrorWords.push(result);
    }

    matches = pattern.exec(text);
  }

  if (!counter) {
    console.log('No word pairs found!');
  } else {
    console.log(`${counter} word pairs found!`);
  }

  if (!mirrorWords.length) {
    console.log('No mirror words!');
  } else {
    let result = mirrorWords.join(', ');
    console.log(`The mirror words are:\n${result}`);
  }
}

mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
