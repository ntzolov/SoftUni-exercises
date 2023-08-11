function emojiDetector(input) {
  let text = input.shift();
  let pattern = /([:*]{1})\1(?<emoji>[A-Z][a-z]{2,})\1\1/g;
  let thresholdPattern = /[0-9]/g
  let threshold = text.match(thresholdPattern).reduce((acc, el) => acc * el, 1);
  console.log(`Cool threshold: ${threshold}`);

  let counter = 0;
  let emojisCoolest = [];
  let matches = pattern.exec(text);
  while (matches) {
    counter++;
    let emoji = matches.groups.emoji;
    let emojiCoolness = 0;

    for (let letter of emoji) {
      emojiCoolness += Number(letter.charCodeAt());
    }
    if (emojiCoolness >= threshold) {
      emojisCoolest.push(matches[0]);
    }

    matches = pattern.exec(text);
  }

  console.log(`${counter} emojis found in the text. The cool ones are:`);
  for (let emoji of emojisCoolest) {
    console.log(emoji);
  }
}

emojiDetector([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
]);
