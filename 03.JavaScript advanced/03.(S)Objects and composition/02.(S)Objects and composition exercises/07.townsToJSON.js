function townsToJSON(arr) {
  let regEx = /\s*\|\s*/g;
  let colNames = arr
    .shift()
    .split(regEx)
    .filter((el) => el.length > 0);
  let result = [];

  for (let line of arr) {
    let [town, latitude, longitude] = line
      .split(regEx)
      .filter((el) => el.length > 0);
    latitude = Number(Number(latitude).toFixed(2));
    longitude = Number(Number(longitude).toFixed(2));
    let currObj = {};
    currObj[colNames[0]] = town;
    currObj[colNames[1]] = latitude;
    currObj[colNames[2]] = longitude;
    result.push(currObj);
  }

  console.log(JSON.stringify(result));
}

townsToJSON([
  '| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |',
]);
