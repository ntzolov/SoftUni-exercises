function serializeString(input) {
  let letters = {}
  let text = input.shift();

  for (let i = 0; i < text.length; i++) {
    if (!letters[text[i]]) {
      letters[text[i]] = [i]
    } else {
      letters[text[i]].push(i)
    }
  }

  for (let [key, value] of Object.entries(letters)) {
    console.log(`${key}:${value.join('/')}`);
  }
}

serializeString(["avjavamsdmcalsdm"])