function secretChat(input) {
  let message = input.shift();

  for (let line of input) {
    line = line.split(':|:');
    let command = line.shift();
    switch (command) {
      case 'Reveal':
        console.log(`You have a new text message: ${message}`);
        break;
      case 'InsertSpace':
        let index = Number(line);
        insertSpace(index);
        break;
      case 'Reverse':
        let substring = String(line);
        reverse(substring);
        break;
      case 'ChangeAll':
        let [stringToReplace, stringReplacement] = line;
        changeAll(stringToReplace, stringReplacement);
        break;
    }
  }

  function insertSpace(index) {
    let firstPart = message.slice(0, index);
    let secondPart = message.slice(index);
    message = firstPart + ' ' + secondPart;
    console.log(message);
  }

  function reverse(string) {
    if (message.includes(string)) {
      let index = message.indexOf(string);
      let reversedSubstring = string.split('').reverse().join('');
      let firstPart = message.slice(0, index);
      let secondPart = message.slice(index + string.length);
      message = firstPart + secondPart + reversedSubstring;
      console.log(message);
    } else {
      console.log('error');
    }
  }

  function changeAll(toReplace, replacement) {
    message = message.split(toReplace).join(replacement);
    console.log(message);
  }
}

secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal',
]);
