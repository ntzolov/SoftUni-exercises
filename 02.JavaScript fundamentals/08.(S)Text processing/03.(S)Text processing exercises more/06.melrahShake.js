function melrahShake(input) {
  let text = input.shift();
  let pattern = input.shift();

  let indexLeft = text.indexOf(pattern);
  let indexRight = text.lastIndexOf(pattern);

  while (indexLeft !== indexRight) {
    console.log('Shaked it.');
    text = text.slice(0, indexLeft) + text.slice(indexLeft + pattern.length);
    indexRight = text.lastIndexOf(pattern);
    text = text.slice(0, indexRight) + text.slice(indexRight + pattern.length);
    let indexPattern = Math.floor(pattern.length / 2);
    pattern = pattern.replace(pattern[indexPattern], '');
    if (pattern.length < 1) {
      break;
    }
    indexLeft = text.indexOf(pattern);
    indexRight = text.lastIndexOf(pattern);
  }

  console.log('No shake.');
  console.log(`${text}`);
}

melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm']);
