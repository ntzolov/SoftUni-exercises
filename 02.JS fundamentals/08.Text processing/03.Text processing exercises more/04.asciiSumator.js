function asciiSumator(input) {
  let startAscii = input.shift().charCodeAt();
  let endAscii = input.shift().charCodeAt();
  let start = Math.min(startAscii, endAscii);
  let end = Math.max(startAscii, endAscii);
  let text = input.shift();
  let sumOfAscii = 0;

  for (let letter of text) {
    if (letter.charCodeAt() > start && letter.charCodeAt() < end) {
      sumOfAscii += letter.charCodeAt();
    }
  }

  console.log(sumOfAscii);
}

asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']);
