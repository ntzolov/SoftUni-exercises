function messageTranslator(input) {
  let pattern = /(!)(?<command>[A-Z][a-z]{2,})\1:\[(?<string>[A-Za-z]{8,})\]/
  let cycles = Number(input.shift())

  for (let i = 0; i < cycles; i++) {
    let line = input[i];
    let match = pattern.exec(line);
    if (match) {
      let command = match.groups.command;
      let string = match.groups.string;
      let asciiOfLetters = [];
      for (let letter of string) {
        asciiOfLetters.push(letter.charCodeAt())
      }
      console.log(`${command}: ${asciiOfLetters.join(' ')}`);
    } else {
      console.log('The message is invalid');
    }
  }

}

messageTranslator((["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"])
)