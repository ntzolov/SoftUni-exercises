function charactersInRange(char1, char2) {
  let ascii1 = char1.charCodeAt();
  let ascii2 = char2.charCodeAt();
  let result = [];

  for (
    let i = Math.min(ascii1, ascii2) + 1;
    i < Math.max(ascii1, ascii2);
    i++
  ) {
    result.push(String.fromCharCode(i));
  }

  console.log(result.join(' '));
}

charactersInRange('a', 'd');
