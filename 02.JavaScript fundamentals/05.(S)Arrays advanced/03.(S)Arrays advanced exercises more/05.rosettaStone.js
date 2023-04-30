function rosettaStone(input) {
  let templateRows = Number(input.shift());
  let template = [];
  let encodedMatrix = [];
  let lettersList = {
    0: ' ',
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
    26: 'Z',
    27: ' ',
  };

  for (let i = 0; i < templateRows; i++) {
    template.push(input.shift().split(' ').map(Number));
  }

  for (let line of input) {
    encodedMatrix.push(line.split(' ').map(Number));
  }

  let result = '';

  for (let row = 0; row < encodedMatrix.length; row++) {
    for (let col = 0; col < encodedMatrix[0].length; col++) {
      let templateNum = template[row % templateRows][col % template[0].length];
      let encodedMatrixNum = encodedMatrix[row][col];
      let num = templateNum + encodedMatrixNum;
      result += numToLetter(num);
    }
  }

  function numToLetter(num) {
    if (num > 27) {
      num = num % 27;
    }

    let letter = lettersList[num];
    return letter;
  }

  console.log(result);
}

rosettaStone([
  '1',
  '1 3 13',
  '12 22 14 13 25 0 4 24 23',
  '18 24 2 25 22 0 0 11 18',
  '8 25 6 26 8 23 13 4 14',
  '14 3 14 10 6 1 6 16 14',
  '11 12 2 10 24 2 13 24 0',
  '24 24 10 14 15 25 18 24 12',
  '4 24 0 8 4 22 19 22 14',
  '0 11 18 26 1 19 18 13 15',
  '8 15 14 26 24 14 26 24 14',
]);
