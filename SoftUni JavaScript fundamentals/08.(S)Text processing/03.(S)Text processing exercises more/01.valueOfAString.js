function valueOfAString(input) {

  // Variables
  let sumOfUppercaseLetters = 0;
  let sumOfLowercaseLetters = 0;

  let command = input.pop();
  let text = input.pop();

  // Logic
  if (command === 'LOWERCASE') {
    checkSumLowercase(text);
    console.log(`The total sum is: ${sumOfLowercaseLetters}`);
  } else if (command === 'UPPERCASE') {
    checkSumUppercase(text);
    console.log(`The total sum is: ${sumOfUppercaseLetters}`);
  }

  // Functions
  function checkSumLowercase(text) {
    for (let letter of text) {
      if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
        sumOfLowercaseLetters += letter.charCodeAt();
      }
    }
  }

  function checkSumUppercase(text) {
    for (let letter of text) {
      if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
        sumOfUppercaseLetters += letter.charCodeAt();
      }
    }
  }
}

valueOfAString(['AC/DC', 'UPPERCASE']);
