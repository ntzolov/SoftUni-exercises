function convertToObject(jsonString) {
  let JSONtoObject = JSON.parse(jsonString);
  for (const key of Object.keys(JSONtoObject)) {
    console.log(`${key}: ${JSONtoObject[key]}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')