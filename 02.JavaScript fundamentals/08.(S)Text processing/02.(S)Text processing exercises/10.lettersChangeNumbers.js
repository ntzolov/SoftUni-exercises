function lettersChangeNumbers(data) {
  let cases = data.split(' ');
  let alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('').sort();
  let sumsArray = [];

  for (let line of cases) {
    if (line.length > 0) {
      line = line.split('');
    } else {
      continue;
    }

    let frontLetter = line.shift();
    let endLetter = line.pop();
    let number = Number(line.join(''));

    let frontLetterAsNumber = frontLetter.charCodeAt();
    if (frontLetterAsNumber >= 65 && frontLetterAsNumber <= 90) {
      number /= alphabet.indexOf(frontLetter.toLowerCase()) + 1;
    } else {
      number *= alphabet.indexOf(frontLetter.toLowerCase()) + 1;
    }

    let endLetterAsNumber = endLetter.charCodeAt();
    if (endLetterAsNumber >= 65 && endLetterAsNumber <= 90) {
      number -= alphabet.indexOf(endLetter.toLowerCase()) + 1;
    } else {
      number += alphabet.indexOf(endLetter.toLowerCase()) + 1;
    }

    sumsArray.push(number);
  }

  let finalSum = 0;
  for (let sum of sumsArray) {
    finalSum += sum;
  }

  console.log(finalSum.toFixed(2));
}

lettersChangeNumbers('P34562Z q2576f   H456z');
