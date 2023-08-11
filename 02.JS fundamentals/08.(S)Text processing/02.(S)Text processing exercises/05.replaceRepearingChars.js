function replaceRepearingChars(string) {
  let array = string.split('');
  let previousLetter
  let result = ''
  
  for (let letter of array) {
    if (letter !== previousLetter) {
      result += letter
    }
    previousLetter = letter
  }
  console.log(result);
}

replaceRepearingChars('aaaaabbbbbcdddeeeedssaa')