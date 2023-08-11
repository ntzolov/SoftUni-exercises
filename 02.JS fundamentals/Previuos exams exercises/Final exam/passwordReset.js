function passwordReset(input) {
  let string = input.shift();

  for (let line of input) {
    line = line.split(' ');
    let command = line.shift();
    if (command === 'Done') {
      break;
    } else if (command === 'TakeOdd') {
      takeOdd();
    } else if (command === 'Cut') {
      let [index, length] = line;
      index = Number(index);
      length = Number(length);
      cut(index, length);
    } else if (command === 'Substitute') {
      let [substring, substitute] = line;
      sub(substring, substitute);
    }
  }

  console.log(`Your password is: ${string}`);

  function takeOdd() {
    let result = '';
    for (let i = 0; i < string.length; i++) {
      if (i % 2 === 1) {
        result += string[i];
      }
    }
    string = result;
    console.log(string);
  }

  function cut(index, length) {
    let substring = string.slice(index, index + length);
    string = string.replace(substring, '');
    console.log(string);
  }

  function sub(substring, substitute) {
    if (string.includes(substring)) {
      string = string.split(substring).join(substitute);
    } else {
      return console.log('Nothing to replace!');
    }
    console.log(string);
  }
}

passwordReset([
  'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
  'TakeOdd',
  'Cut 15 3',
  'Substitute :: -',
  'Substitute | ^',
  'Done',
]);
