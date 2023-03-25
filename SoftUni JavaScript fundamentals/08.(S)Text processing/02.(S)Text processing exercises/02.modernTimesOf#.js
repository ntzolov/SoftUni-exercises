function modernTimesOfHash(string) {
  string = string.split(' ');
  for (let word of string) {
    if (word.startsWith('#') && word.length > 1) {
      word = word.replace('#', '');
      let isValid = true;
      for (let letter of word) {
        let charCode = letter.charCodeAt();
        if (
          charCode < 65 ||
          charCode > 122 ||
          (charCode > 90 && charCode < 97)
        ) {
          isValid = false;
        }
      }
      if (isValid) {
        console.log(word);
      }
    }
  }
}

modernTimesOfHash(
  'Nowadays everyone uses # to tag a #sp@cial word in #socialMedia'
);
