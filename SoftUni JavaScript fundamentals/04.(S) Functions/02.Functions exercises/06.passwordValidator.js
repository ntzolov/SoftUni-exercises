function passwordValidator(str) {
  let isError = false;

  if (str.length < 6 || str.length > 10) {
    console.log('Password must be between 6 and 10 characters');
    isError = true;
  }

  if (!isValidSymbolFromStr(str)) {
    console.log('Password must consist only of letters and digits');
    isError = true;
  }

  if (!isTwoDigits(str)) {
    console.log('Password must have at least 2 digits');
    isError = true;
  }

  if (!isError) {
    console.log('Password is valid');
  }

  // Check if current symbol is a valid one
  function isValidSymbolFromStr(str) {
    const falseSymbols = [58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96];

    for (const element of str) {
      const currChar = element.charCodeAt();
      if (
        currChar < 48 ||
        currChar > 122 ||
        falseSymbols.includes(currChar) === true
      ) {
        continue;
      }
    }
    return true;
  }
  // Check if password contain a least 2 digits
  function isTwoDigits(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      let currChar = str[i].charCodeAt();
      if ((48 <= currChar) & (currChar <= 57)) {
        counter++;
      }
    }
    return counter < 2 ? false : true;
  }
}

passwordValidator('samol3vsk1');
