function pascalCaseSpliter(string) {
  let letters = string.split('');
  let tempWord = [];
  let result = [];
  let finalResult = ''

  for (let letter of letters) {
    let charCode = letter.charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      if (tempWord.length === 0) {
        tempWord = [letter];
      } else {
        result.push(tempWord);
        tempWord = [letter];
      }
    } else {
      tempWord.push(letter);
    }
  }
  result.push(tempWord)

  for (let wordArray of result) {
    for (let letter of wordArray) {
      finalResult += letter
    }
    finalResult += ' '
  }

  console.log(finalResult.trim().split(' ').join(', '));
}

pascalCaseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan');
