function solve() {
  const inputText = document.querySelector('#input');
  let formattedText = inputText.value
    .split('.')
    .map((el) => el.trim())
    .filter((el) => el.length > 0);
  let output = document.querySelector('#output');

  let counter = 0;
  let paragraph = '';
  let result = [];
  for (let sentence of formattedText) {
    counter++;
    if (counter < 4) {
      paragraph += sentence + '. ';
    } else {
      result.push(paragraph.trim());
      paragraph = sentence + '. ';
      counter = 1;
    }
  }

  if (paragraph.length > 0) {
    result.push(paragraph.trim());
  }

  output.innerHTML = result.map((el) => `<p>${el}</p>`);
}
