function passwordValidator(input) {
  let password = input.shift();

  for (let line of input) {
    if (line.includes('Make Upper')) {
      let index = Number(line.split(' ').pop());
      let letter = password[index];
      password = password.replace(password[index], letter.toUpperCase());
      console.log(password);
    } else if (line.includes('Make Lower')) {
      let index = Number(line.split(' ').pop());
      let letter = password[index];
      password = password.replace(password[index], letter.toLowerCase());
      console.log(password);
    } else if (line.includes('Insert')) {
      let [command, index, char] = line.split(' ');
      index = Number(index);
      if (index >= 0 && index < password.length) {
        let leftSide = password.slice(0, index);
        let rightSide = password.slice(index);
        password = leftSide + char + rightSide;
        console.log(password);
      } else {
        continue;
      }
    } else if (line.includes('Replace')) {
      let [command, char, value] = line.split(' ');
      value = Number(value);
      let asciiSum = char.charCodeAt() + value;
      let newChar = String.fromCharCode(asciiSum);
      if (password.includes(char)) {
        password = password.split(char).join(newChar);
        console.log(password);
      }
    } else if (line.includes('Validation')) {
      if (password.length < 8) {
        console.log('Password must be at least 8 characters long!');
      }
      let pattern = /^[A-Za-z0-9_]+$/;
      let isMatch = pattern.test(password);
      if (!isMatch) {
        console.log('Password must consist only of letters, digits and _!');
      }
      pattern = /[A-Z]/;
      isMatch = pattern.test(password);
      if (!isMatch) {
        console.log('Password must consist at least one uppercase letter!');
      }
      pattern = /[a-z]/;
      isMatch = pattern.test(password);
      if (!isMatch) {
        console.log('Password must consist at least one lowercase letter!');
      }
      pattern = /[0-9]/;
      isMatch = pattern.test(password);
      if (!isMatch) {
        console.log('Password must consist at least one digit!');
      }
    } else if (line.includes('Complete')) {
      break;
    }
  }
}

passwordValidator([
  'hywryhrywryry',
  'Validation',
  'Complete',
]);
