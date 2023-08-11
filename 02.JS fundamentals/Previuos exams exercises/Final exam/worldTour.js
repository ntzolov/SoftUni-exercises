function worldTour(input) {
  let stops = input.shift();

  for (let line of input) {
    line = line.split(':')
    let command = line.shift();
    if (command === 'Travel') {
      break;
    } else if (command === 'Add Stop') {
      let [index, string] = line;
      index = Number(index);
      addStop(stops, index, string)
    } else if (command === 'Remove Stop') {
      let [startIndex, stopIndex] = line;
      startIndex = Number(startIndex);
      stopIndex = Number(stopIndex);
      removeStop(stops, startIndex, stopIndex)
    } else if (command === 'Switch') {
      let [stringToReplace, stringReplacement] = line;
      mySwitch(stops, stringToReplace, stringReplacement)
    }
  }

  function addStop (text, index, string) {
    if (index <= text.length - 1) {
      let firstPart = stops.slice(0, index);
      let secondPart = stops.slice(index);
      let tempResult = firstPart + string + secondPart;
      stops = tempResult;
    }
    console.log(stops);
  }

  function removeStop(text, startIndex, stopIndex) {
    if (startIndex <= text.length - 1 && stopIndex <= text.length - 1) {
      let firstPart = stops.slice(0, startIndex);
      let secondPart = stops.slice(stopIndex + 1);
      let tempResult = firstPart + secondPart;
      stops = tempResult;
    }
    console.log(stops);
  }

  function mySwitch(text, stringToReplace, stringReplacement) {
    if (text.includes(stringToReplace)) {
      let tempResult = text.split(stringToReplace).join(stringReplacement);
      stops = tempResult;
    }
    console.log(stops);
  }

  console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour([
  'Albania:Bulgaria:Cyprus:Deuchland',
  'Add Stop:3:Nigeria',
  'Remove Stop:4:8',
  'Switch:Albania: Azərbaycan',
  'Travel',
]);
