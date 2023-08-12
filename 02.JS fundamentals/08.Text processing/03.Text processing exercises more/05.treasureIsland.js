function treasureIsland(input) {
  let key = input.shift().split(' ');
  let result = '';
  let resultAsArray = [];

  for (let line of input) {
    if (line === 'find') {
      break;
    } else {
      let keyIndex = 0;
      for (let i = 0; i < line.length; i++) {
        if (keyIndex === key.length) {
          keyIndex = 0;
        }

        let charCode = line[i].charCodeAt() - Number(key[keyIndex]);
        result += String.fromCharCode(charCode);
        keyIndex++;
      }
      resultAsArray.push(result);
      result = '';
    }
  }
  
  for (let line of resultAsArray) {
    let startIndexName = line.indexOf('&');
    let endIndexName = line.lastIndexOf('&');
    let name = line.slice(startIndexName + 1, endIndexName)
    
    let startIndexCoordinates = line.indexOf('<');
    let endIndexCoordinates = line.lastIndexOf('>');
    let coordinates = line.slice(startIndexCoordinates + 1, endIndexCoordinates);
    
    console.log(`Found ${name} at ${coordinates}`);
  }
}

treasureIsland([
  '1 2 1 3',
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  'find',
]);
