function starEnigma(input) {
  let letters = ['s', 't', 'a', 'r'];
  let numberOfMessages = input.shift();
  let attackedPlanets = [];
  let destroyedPlanets = [];

  for (let message of input) {
    let tempFilteredMessage = '';
    let counter = 0;
    for (let letter of message) {
      if (letters.includes(letter.toLowerCase())) {
        counter++;
      }
    }
    for (let letter of message) {
      let letterNewAscii = letter.charCodeAt() - counter;
      let newLetter = String.fromCharCode(letterNewAscii);
      tempFilteredMessage += newLetter;
    }
    let regEx =
      /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[A|D])![^@\-!:>]*->(?<soldiers>\d+)/gm;
    let validate = regEx.exec(tempFilteredMessage);

    if (validate) {
      if (validate.groups.attackType === 'A') {
        attackedPlanets.push(validate.groups.planet);
      } else if (validate.groups.attackType === 'D') {
        destroyedPlanets.push(validate.groups.planet);
      }
    }
  }
  attackedPlanets.sort((a, b) => a.localeCompare(b));
  destroyedPlanets.sort((a, b) => a.localeCompare(b));
  console.log(`Attacked planets: ${attackedPlanets.length}`);
  for (let planet of attackedPlanets) {
    console.log(`-> ${planet}`);
  }
  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  for (let planet of destroyedPlanets) {
    console.log(`-> ${planet}`);
  }
}

starEnigma([
  '3',
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  'GQhrr|A977777(H(TTTT',
  'EHfsytsnhf?8555&I&2C9555SR',
]);
