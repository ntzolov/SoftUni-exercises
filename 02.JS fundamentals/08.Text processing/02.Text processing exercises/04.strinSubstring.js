function strinSubstring(word, text) {
let isFound = false

  let array = text.toLowerCase().split(' ');
  for (let currWord of array) {
    if (currWord === word) {
      console.log(currWord);
      isFound = true
    }
  }
  if(!isFound) {
    console.log(`${word} not found!`);
  }
}

strinSubstring('python',
'JavaScript is the best programming language'
)