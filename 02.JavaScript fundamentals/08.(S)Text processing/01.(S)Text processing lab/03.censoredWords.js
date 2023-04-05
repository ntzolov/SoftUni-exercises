function censoredWords(sentence, word) {
  let index;
  while (sentence.includes(word, index + word.length)) {
    index = sentence.indexOf(word);
    sentence = sentence.replace(word, '*'.repeat(word.length));
  }
  console.log(sentence);
}

censoredWords('A small sentence with some words, small  a j small, sasa', 'small');
