function activationKeys(input) {
  let key = input.shift();

  for (let line of input) {
    line = line.split('>>>');
    let command = line.shift();

    if (command === 'Contains') {
      let substring = line;
      if (key.includes(substring)) {
        console.log(`${key} contains ${substring}`);
      } else {
        console.log('Substring not found!');
      }
    } else if (command === 'Flip') {
      let [CaseSensitive, startIndex, endIndex] = line;
      let newWord = ''
      for (let i = 0; i < key.length; i++) {
        if (i >= startIndex && i < endIndex) {
          if (CaseSensitive === 'Upper') {
            newWord += key[i].toUpperCase()
          } else {
            newWord += key[i].toLowerCase()
          }
        }
      }
      let leftSide = key.slice(0, startIndex);
      let rightSide = key.slice(endIndex);
      key = leftSide + newWord + rightSide;
      console.log(key);
    } else if (command === 'Slice') {
      let [startIndex, endIndex] = line;
      let leftSide = key.slice(0, startIndex);
      let rightSide = key.slice(endIndex);
      key = leftSide + rightSide;
      console.log(key);
    } else if (command === 'Generate') {
      return console.log(`Your activation key is: ${key}`)
    }
  }
}

activationKeys([
  '134softsf5ftuni2020rockz42',
  'Slice>>>3>>>7',
  'Contains>>>-rock',
  'Contains>>>-uni-',
  'Contains>>>-rocks',
  'Flip>>>Upper>>>2>>>8',
  'Flip>>>Lower>>>5>>>11',
  'Generate',
]);
