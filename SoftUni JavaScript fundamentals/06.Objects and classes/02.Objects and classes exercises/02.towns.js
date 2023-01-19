function towns(input) {
  let townObject = {};
  
  for (const el of input) {
    let currentTown = el.split(' | ');
    townObject.town = currentTown[0];
    townObject.latitude = Number(currentTown[1]).toFixed(2);
    townObject.longitude = Number(currentTown[2]).toFixed(2);
    console.log(townObject);
  }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
