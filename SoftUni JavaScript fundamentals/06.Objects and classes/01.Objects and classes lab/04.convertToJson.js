function convertToJson(firstName, lastName, color) {
  let person = {
    name: firstName,
    lastName: lastName,
    hairColor: color,
  }

  console.log(person.name);

  let objToJSON = JSON.stringify(person);
  console.log(objToJSON);
}

convertToJson('George', 'Jones', 'Brown')